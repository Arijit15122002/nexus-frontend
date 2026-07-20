import { useSelector } from "react-redux";
import SplitText from "../components2/Chat/SplitText/SplitText";
import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Plus, SendHorizonal } from "lucide-react";
import axios from "axios";

export default function Chat() {
  const username = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);
  const theme = useSelector((state) => state.theme.theme);

  const [attachFileOpen, setAttachFileOpen] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const MAX_HEIGHT = 200; // px, tweak as needed
  const MIN_HEIGHT = 28; // px, matches your old input's rough height

  const handleSendPrompt = async (message) => {
    try {
      const response = await axios.post(
        "https://nexus-backend-7v2b.onrender.com/api/gemini/chat",
        {
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
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
    if (message.trim() !== "") {
      handleSendPrompt(message);
      setMessage("");
      resetTextareaHeight();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // stop the newline from being inserted
      sendMessage();
    }
    // Shift+Enter falls through and lets the textarea insert a newline naturally
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* prompt input */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] flex flex-row gap-2 justify-center items-end">
        <div
          className={`transition-transform duration-300 ${attachFileOpen ? "bg-red-600" : "bg-orange-500"} p-3 rounded-2xl cursor-pointer`}
          onClick={() => setAttachFileOpen(!attachFileOpen)}
        >
          <Plus
            size={20}
            strokeWidth={2}
            className={`${attachFileOpen ? "rotate-135" : "rotate-0"} transition-transform duration-300 text-white`}
          />
        </div>

        <div className="w-[90%] max-w-3xl rounded-3xl bg-[#dedede] dark:bg-[#111111] border border-[#dcdcdc] dark:border-[#3a3a3a] overflow-hidden flex items-center justify-center">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask ORKA anything..."
            rows={1}
            style={{ height: `${MIN_HEIGHT}px`, maxHeight: `${MAX_HEIGHT}px` }}
            className="w-full px-5 py-4 bg-transparent dark:text-white outline-none exo resize-none leading-relaxed custom-scrollbar"
          />
        </div>

        <div
          className="p-3 bg-blue-600 text-white rounded-2xl cursor-pointer"
          onClick={sendMessage}
        >
          <ArrowRight size={20} strokeWidth={3} />
        </div>
      </div> */}
      <div className="absolute w-full h-auto bottom-6 flex flex-row items-center justify-center">
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

          <div className="px-4 w-full flex flex-row items-center justify-between">
            <div className="p-2 rounded-xl dark:bg-[#111111] bg-[#dddddd]" onClick={() => setAttachFileOpen(!attachFileOpen)}>
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
    </div>
  );
}
