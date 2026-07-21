import { useState, useEffect, useMemo, useRef } from "react";
import { Copy, Check, Bot, User, UserRound, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";

// Parses "FILE: path\nLANGUAGE: lang\n\n<content>" into structured parts.
// Falls back to plain text if the message doesn't match that shape.
function parseMessageContent(raw) {
  const fileRegex = /^FILE:\s*(.+)\nLANGUAGE:\s*(.+)\n\n([\s\S]*)$/;
  const match = raw.match(fileRegex);
  if (match) {
    return {
      isFile: true,
      filePath: match[1].trim(),
      language: match[2].trim(),
      body: match[3],
    };
  }
  return { isFile: false, body: raw };
}

function CodeBlock({ filePath, language, body }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#454545]/40 dark:bg-[#1c1c1c] bg-[#f5f5f5]">
      {language === "text" || language == "english" ? (
        <></>
      ) : (
        <div className="flex items-center justify-between px-4 py-2 dark:bg-[#111111] bg-[#e2e2e2] border-b border-[#454545]/30">
          <div className="flex items-center gap-2 min-w-0">
            <span className="exo text-xs text-[#787878] uppercase tracking-wider shrink-0">
              {language}
            </span>
            {language === "text" ? (
              <></>
            ) : (
              <span className="text-xs dark:text-[#cdcdcd] text-[#343434] truncate font-mono">
                {filePath}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg dark:hover:bg-[#2a2a2a] hover:bg-[#d4d4d4] transition-colors shrink-0"
          >
            {copied ? (
              <Check size={14} className="text-green-500" />
            ) : (
              <Copy size={14} className="dark:text-[#cdcdcd] text-[#343434]" />
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-xs leading-relaxed custom-scrollbar">
        <code className="font-mono dark:text-[#e0e0e0] text-[#232323] whitespace-pre-wrap">
          {body}
        </code>
      </pre>
    </div>
  );
}

function ChatBubble({ message }) {
  const isUser = message.role === "USER";
  const parsed = useMemo(
    () => parseMessageContent(message.content),
    [message.content],
  );
  const language = parsed.language?.toLowerCase();

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(parsed.body);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={`w-full flex ${isUser ? "justify-end" : "justify-start"} px-2`}
    >
      <div
        className={`flex gap-3 max-w-[85%] sm:max-w-[75%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >

        {/* content */}
        <div className="flex flex-col gap-1 min-w-0">
          {(parsed.isFile && language !== "text" && language !== "english") ? (
            <CodeBlock
              filePath={parsed.filePath}
              language={parsed.language}
              body={parsed.body}
            />
          ) : (
            <div
              className={`px-4 py-2.5 rounded-3xl leading-relaxed whitespace-pre-wrap break-words exo ${
                isUser
                  ? " bg-[#dedede] dark:bg-[#080808] text-[#232323] rounded-tr-md text-sm dark:text-white"
                  : "text-sm dark:text-[#fefefe] rounded-3xl rounded-tl-md bg-black/5 dark:bg-black/50"
              }`}
            >
              {parsed.body}
              {!isUser && (
                <div
                  className="w-full h-12 flex flex-row items-end gap-2 justify-end "
                >
                  <div className={`${copied ? "bg-green-200" : "hover:bg-[#dedede]"} p-2 rounded-lg cursor-pointer transition-all duration-300`} onClick={() => handleCopy()}>
                    {copied ? (
                      <Check size={14} className="text-green-700" />
                    ) : (
                      <Copy
                        size={14}
                        className="dark:text-[#cdcdcd] text-[#343434]"
                      />
                    )}
                  </div>
                  <div className="p-2 rounded-lg cursor-pointer hover:bg-[#dedede]">
                    <ThumbsUp size={14}/>
                  </div>
                  <div className="p-2 rounded-lg cursor-pointer hover:bg-[#dedede]">
                    <ThumbsDown size={14}/>
                  </div>
                  <div className="p-2 rounded-lg cursor-pointer hover:bg-[#dedede]">
                    <RotateCcw size={14}/>
                  </div>
                </div>
              )}
            </div>
          )}

          <span
            className={`text-[10px] text-[#878787] px-1 ${
              isUser ? "text-right" : "text-left"
            }`}
          >
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

function MessageList({ messages }) {
  const bottomRef = useRef(null);

  const sortedMessages = useMemo(() => {
    return [...messages].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    );
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [sortedMessages.length]);

  console.log(messages);

  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar flex flex-col items-center gap-5 py-6">
      <div className="w-full h-full w-[90%] max-w-[700px]">
        <div className="w-full h-[100px]"></div>
        {sortedMessages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
        <div className="w-full h-[150px]"></div>
      </div>
      <div ref={bottomRef}/>
    </div>
  );
}

export default MessageList;
