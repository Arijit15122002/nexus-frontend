import React from "react";
import { motion } from "framer-motion";

import AiHead from "../assets/ai-head.png";
import { Pen } from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-[#0f0f0f] transition-all duration-500 px-4">
      {/* BACKGROUND TEXT */}
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-[12%] sm:top-[10%] flex flex-col items-center"
      >
        <div className="w-full flex justify-end pr-2 sm:pr-4 md:pr-6">
          <div className="text-[12px] sm:text-[18px] md:text-[24px] lg:text-[28px] tracking-[5px] sm:tracking-[8px] md:tracking-[12px] uppercase exo text-black/70 dark:text-white/70 transition-all duration-500 z-30">
            HUMAN
          </div>
        </div>

        <div className="text-[#151515] dark:text-white orbitron font-black leading-none tracking-[-3px] sm:tracking-[-6px] md:tracking-[-10px] text-[90px] sm:text-[120px] md:text-[180px] lg:text-[220px] transition-all duration-500 z-10">
          BEYOND
        </div>
      </motion.div>

      {/* CENTER SECTION */}
      <div className="relative w-full h-screen flex items-end justify-between md:px-10 xl:px-20">
        {/* LEFT PANEL */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:flex flex-col items-end gap-4 z-20 w-96 h-[320px] mb-[10vh]"
        >
          {/* CARD */}
          <div className="group flex flex-col justify-end rounded-[32px] border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.04)] dark:shadow-[0_0_40px_rgba(255,255,255,0.03)] p-7 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(255,120,0,0.18)]">
            <div className="orbitron text-black dark:text-white font-semibold text-[16px] tracking-[2px] transition-all duration-300 group-hover:text-orange-500">
              AI MEMORY
            </div>

            <div className="mt-4 exo text-black/70 dark:text-white/60 text-[13px] leading-[25px] transition-all duration-300">
              Persistent intelligent memory system with contextual understanding
              and real-time agent orchestration.
            </div>
          </div>


          <div className="group relative w-fit h-[62px] px-[22px] rounded-full overflow-hidden cursor-pointer flex items-center gap-4 border border-orange-500/20 bg-[#0f0f0f]/90 backdrop-blur-xl transition-all duration-500 hover:scale-[1.04] hover:border-orange-400 hover:shadow-[0_0_50px_rgba(255,120,0,0.35)]">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Pulse Glow */}
            <div className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-orange-500/20 via-orange-400/30 to-orange-500/20 blur-xl" />

            {/* Icon */}
            <div className="relative z-10 w-[42px] h-[42px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_25px_rgba(255,120,0,0.5)] transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
              <Pen className="w-5 h-5 text-white" />
            </div>

            {/* Text */}
            <div className="relative z-10 flex flex-col leading-none">
              <span className="text-[8px] uppercase tracking-[3px] text-orange-400 orbitron">
                Start Building
              </span>

              <span className="mt-1 text-white orbitron text-[14px] tracking-[1.5px] transition-all duration-500 group-hover:text-orange-100">
                Get Started
              </span>
            </div>

            {/* Arrow */}
            <div className="relative z-10 ml-2 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white transition-all duration-500 group-hover:text-black group-hover:translate-x-[2px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center w-full h-full pointer-events-none"
        >
          <img
            src={AiHead}
            alt="AI Head"
            className="w-[180vw] max-w-[700px] max-h-[600px] sm:w-[90vw] md:w-[80vw] lg:w-[700px] object-contain select-none pointer-events-none"
          />
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:flex relative z-20 w-[260px] h-[320px] rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.03)] p-6 flex-col items-center justify-end mb-[20vh] overflow-hidden"
        >
          {/* FLOATING CARDS */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
            {/* LEFT CARD */}
            <div className="absolute left-[20px] top-[20px] rotate-[-18deg] w-[95px] h-[120px] rounded-[20px] border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(255,120,0,0.15)] bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800&auto=format&fit=crop"
                alt="Cyberpunk"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-white/80 exo whitespace-nowrap">
                Cyberpunk
              </span>
            </div>

            {/* RIGHT CARD */}
            <div className="absolute right-[20px] top-[20px] rotate-[18deg] w-[95px] h-[120px] rounded-[20px] border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(255,120,0,0.12)] bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop"
                alt="Neon"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-white/80 exo whitespace-nowrap">
                Neon Future
              </span>
            </div>

            {/* CENTER CARD */}
            <div className="relative z-20 w-[120px] h-[150px] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.35)] bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop"
                alt="AI"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.18),transparent_60%)]" />

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-white orbitron tracking-[1px] whitespace-nowrap">
                AI Vision
              </span>
            </div>

            {/* SPARKLE */}
            <div className="absolute top-[-8px] left-[70px] text-white text-[14px] animate-pulse">
              ✦
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="mt-auto flex flex-col items-center text-center">
            <div className="orbitron text-white text-[20px] tracking-[1px]">
              Stunning Details
            </div>

            <div className="mt-3 exo text-white/50 text-[13px] leading-[22px] px-2">
              Effortless creation of futuristic textures and AI-generated visual
              assets.
            </div>
          </div>
        </motion.div>
      </div>

      {/* SEARCH BAR */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-[5%] sm:bottom-[7%] md:bottom-[8%] z-30 w-full flex justify-center px-4"
      >
        <div className="w-full max-w-[700px] h-[55px] sm:h-[60px] rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.08)] dark:shadow-[0_0_40px_rgba(255,255,255,0.04)] px-2 sm:px-3 flex items-center justify-between transition-all duration-500">
          <input
            type="text"
            placeholder="Ask Nexus AI anything..."
            className="flex-1 h-full bg-transparent outline-none px-3 text-[12px] sm:text-[14px] exo text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/30"
          />

          <button className="h-9 sm:h-10 px-4 sm:px-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white orbitron font-semibold text-[9px] sm:text-[10px] tracking-[1px] transition-all duration-300 shadow-[0_0_25px_rgba(29, 175, 228, 0.45)] whitespace-nowrap cursor-pointer">
            GENERATE
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
