import { useSelector } from "react-redux";
import SplitText from "../components2/Chat/SplitText/SplitText";
import React, { useState } from "react";
import TextType from "../components2/Chat/TextType/TextType";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Plus } from "lucide-react";
import axios from "axios";

export default function Chat() {
  const username = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);

  const [attachFileOpen, setAttachFileOpen] = useState(false);
  const [message, setMessage] = useState("");

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

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* prompt input */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] flex flex-row gap-2 justify-center items-center">
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
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask ORKA anything..."
          className="w-[90%] max-w-3xl px-5 py-4 rounded-3xl bg-[#dedede] dark:bg-[#111111] dark:text-white border border-[#dcdcdc] dark:border-[#3a3a3a] outline-none exo"
        />
        <div
          className="p-3 bg-blue-600 text-white rounded-2xl cursor-pointer"
          onClick={() => {
            if (message != "") {
              handleSendPrompt(message);
            }
          }}
        >
          <ArrowRight size={20} strokeWidth={3} />
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
          // onLetterAnimationComplete={}
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
