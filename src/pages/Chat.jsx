import { useDispatch, useSelector } from "react-redux";
import SplitText from "../components2/Chat/SplitText/SplitText";
import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Plus, SendHorizonal } from "lucide-react";
import { FetchUserConversations } from "../utils/FetchUserData";
import MessageList from "../components2/Chat/MessageList";
import {
  addMessage,
  updateMessage,
  setLoading,
} from "../redux/slices/messageSlice";

export default function Chat() {
  const username = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);
  const theme = useSelector((state) => state.theme.theme);
  const conversationId = useSelector((state) => state.message.conversationId);
  const isLoading = useSelector((state) => state.message.loading);
  const messages = useSelector((state) => state.message.messages);
  const dispatch = useDispatch();
  console.log(messages);
  console.log(token)

  useEffect(() => {
    if (!token) return;

    FetchUserConversations(token, dispatch);
  }, [token, dispatch]);

  const [attachFileOpen, setAttachFileOpen] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const MAX_HEIGHT = 200; // px, tweak as needed
  const MIN_HEIGHT = 28; // px, matches your old input's rough height

  const handleSendPrompt = async (message) => {
    const assistantId = crypto.randomUUID();
    let accumulatedContent = "";
    let messageStarted = false;

    dispatch(setLoading(true));

    try {
      const response = await fetch(
        "https://nexus-backend-7v2b.onrender.com/api/gemini/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message, conversationId }),
        },
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop(); // last entry may be a partial line, save for next chunk

        for (const line of lines) {
          if (!line.startsWith("data:")) continue;

          const jsonStr = line.slice(5).trim();
          if (!jsonStr) continue;

          let payload;
          try {
            payload = JSON.parse(jsonStr);
          } catch (e) {
            console.error("Bad chunk:", jsonStr);
            continue;
          }

          if (payload.type === "TEXT") {
            accumulatedContent += payload.content;

            if (!messageStarted) {
              messageStarted = true;
              dispatch(
                addMessage({
                  id: assistantId,
                  role: "ASSISTANT",
                  content: accumulatedContent,
                  createdAt: new Date().toISOString(),
                }),
              );
            } else {
              dispatch(
                updateMessage({
                  id: assistantId,
                  updates: { content: accumulatedContent },
                }),
              );
            }
          }

          if (payload.type === "COMPLETE" && payload.completed) {
            // stream finished — nothing else required here
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${MIN_HEIGHT}px`;
    }
  };

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto"; // shrink first so it can shrink back down too
    const newHeight = Math.min(el.scrollHeight, MAX_HEIGHT);
    el.style.height = `${newHeight}px`;
    el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  };

  useEffect(() => {
    autoResize();
  }, [message]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "USER",
      content: message,
      createdAt: new Date().toISOString(),
    };

    dispatch(addMessage(userMessage));

    handleSendPrompt(message);

    setMessage("");
    resetTextareaHeight();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // stop the newline from being inserted
      sendMessage();
    }
    // Shift+Enter falls through and lets the textarea insert a newline naturally
  };

  return (
    <div className=" w-full h-full flex flex-col items-center justify-start relative">
      {/* prompt input */}
      <div className="absolute w-full h-auto bottom-6 flex flex-row items-center justify-center z-20">
        <div className="w-[90%] max-w-[700px] px-3 py-2 rounded-3xl dark:bg-[#343434] bg-[#efefef] border border-[0.5px] border-[#cdcdcd] dark:border-[#454545] flex flex-col gap-3 items-center justify-center transition-all duration-300">
          <div className="w-full flex items-center justify-center">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask ORKA anything..."
              rows={1}
              style={{
                height: `${MIN_HEIGHT}px`,
                maxHeight: `${MAX_HEIGHT}px`,
              }}
              className="w-full px-3 py-2 bg-transparent text-sm dark:text-white outline-none exo resize-none leading-relaxed custom-scrollbar "
            />
          </div>

          <div className="px-1 sm:px-2 md:px-3 lg:px-4 w-full flex flex-row items-center justify-between">
            <div
              className="p-2 rounded-xl dark:bg-[#111111] bg-[#dddddd]"
              onClick={() => setAttachFileOpen(!attachFileOpen)}
            >
              <Plus
                size={18}
                className={`${theme == "dark" ? "text-[#fefefe]" : "text-[#111111]"}`}
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="exo text-xs tracking-wider text-[#787878]">
                Orka - v1
              </div>
              <div
                className="p-3 rounded-2xl bg-orange-400 text-white cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={sendMessage}
              >
                <SendHorizonal size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 h-12 z-0 flex justify-center ">
        <div className="w-full md:w-[90%] h-full backdrop-blur-sm"></div>
      </div>

      <div className="h-full w-full flex flex-col items-center justify-center">
        {messages.length == 0 ? (
          isLoading ? (
            <div></div>
          ) : (
            <>
              <div className="flex flex-col gap-2 items-center justify-center">
                <SplitText
                  text={`Hello ${username}!`}
                  className="-mt-18 text-6xl font-semibold text-center text-[] exo text-[#232323] dark:text-[#efefef]"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 80 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  showCallback
                />

                <TypeAnimation
                  sequence={["Welcome to ORKA!  What can I do for you?"]}
                  speed={50}
                  cursor={true}
                  className="text-semibold exo text-[#343434] dark:text-[#7a7a7a]"
                />
              </div>
            </>
          )
        ) : (
          <div className="w-full h-full flex flex-row items-center justify-center">
            <div className="w-full h-full px-3">
                {/* the chats will be shown here */}
                <MessageList messages={messages} />
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
