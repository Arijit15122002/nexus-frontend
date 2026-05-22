import React from "react";
import { motion } from "framer-motion";
import { Pen } from "lucide-react";

import AiHead from "../assets/ai-head.png";

const Home = () => {
  return (
    <div className="relative min-h-[100svh] w-full overflow-x-hidden overflow-y-hidden flex flex-col items-center bg-white dark:bg-[#0a0a0a] transition-all duration-500 px-4">

      {/* BACKGROUND TEXT */}
      <motion.div
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-[30%] sm:top-[30%] z-10 flex flex-col items-center w-full"
      >

        <div className="text-[#111] dark:text-white orbitron font-black leading-none tracking-[-2px] sm:tracking-[-6px] md:tracking-[-10px] text-[100px] sm:text-[110px] md:text-[180px] lg:text-[220px] transition-all duration-500">
          BEYOND
        </div>

        <div className="w-full flex justify-center sm:justify-end pr-0 sm:pr-8 md:pr-12 lg:pr-20">
          <div className="text-[11px] sm:text-[16px] md:text-[22px] lg:text-[28px] tracking-[6px] sm:tracking-[10px] md:tracking-[12px] uppercase exo text-black/60 dark:text-white/60">
            HUMAN
          </div>
        </div>

      </motion.div>

      {/* CENTER SECTION */}
      <div className="relative w-full min-h-[100svh] flex items-end justify-center lg:justify-between max-w-[1600px]">

        {/* LEFT PANEL */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:flex flex-col items-end gap-5 z-20 w-[360px] mb-[14vh]"
        >

          {/* CARD */}
          <div className="group rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.03)] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(255,120,0,0.18)]">

            <div className="orbitron text-white font-semibold text-[16px] tracking-[2px] group-hover:text-orange-400 transition-all duration-300">
              AI MEMORY
            </div>

            <div className="mt-4 exo text-white/60 text-[13px] leading-[25px]">
              Persistent intelligent memory system with contextual understanding and real-time agent orchestration.
            </div>

          </div>

          {/* BUTTON */}
          <div className="group relative w-fit h-[62px] px-[22px] rounded-full overflow-hidden cursor-pointer flex items-center gap-4 border border-orange-500/20 bg-[#0f0f0f]/90 backdrop-blur-xl transition-all duration-500 hover:scale-[1.04] hover:border-orange-400 hover:shadow-[0_0_50px_rgba(255,120,0,0.35)]">

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative z-10 w-[42px] h-[42px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_25px_rgba(255,120,0,0.5)] transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
              <Pen className="w-5 h-5 text-white" />
            </div>

            <div className="relative z-10 flex flex-col leading-none">
              <span className="text-[8px] uppercase tracking-[3px] text-orange-400 orbitron">
                Start Building
              </span>

              <span className="mt-1 text-white orbitron text-[14px] tracking-[1.5px]">
                Get Started
              </span>
            </div>

          </div>

        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-end justify-center w-full h-full pointer-events-none"
        >

          <img
            src={AiHead}
            alt="AI Head"
            className="w-[115vw] sm:w-[95vw] md:w-[75vw] lg:w-[700px] max-w-none object-contain select-none"
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

            {/* LEFT */}
            <div className="absolute left-[20px] top-[20px] rotate-[-18deg] w-[95px] h-[120px] rounded-[20px] overflow-hidden border border-white/10 bg-[#111]">

              <img
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

            {/* RIGHT */}
            <div className="absolute right-[20px] top-[20px] rotate-[18deg] w-[95px] h-[120px] rounded-[20px] overflow-hidden border border-white/10 bg-[#111]">

              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

            {/* CENTER */}
            <div className="relative z-20 w-[120px] h-[150px] rounded-[24px] overflow-hidden border border-white/10 bg-[#111]">

              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          <div className="mt-auto text-center">

            <div className="orbitron text-white text-[20px] tracking-[1px]">
              Stunning Details
            </div>

            <div className="mt-3 exo text-white/50 text-[13px] leading-[22px]">
              Futuristic textures and AI-generated visual assets.
            </div>

          </div>

        </motion.div>

      </div>

      {/* SEARCH BAR */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-[3%] sm:bottom-[5%] z-30 w-full flex justify-center px-4"
      >

        <div className="w-full max-w-[92vw] sm:max-w-[700px] h-[56px] sm:h-[60px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.04)] px-2 sm:px-3 flex items-center justify-between">

          <input
            type="text"
            placeholder="Ask Nexus AI anything..."
            className="flex-1 h-full bg-transparent outline-none px-4 text-[12px] sm:text-[14px] exo text-white placeholder:text-white/30"
          />

          <button className="h-10 px-5 sm:px-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white orbitron font-semibold text-[9px] sm:text-[10px] tracking-[1px] transition-all duration-300 shadow-[0_0_25px_rgba(0, 187, 255, 0.45)] whitespace-nowrap">
            GENERATE
          </button>

        </div>

      </motion.div>

    </div>
  );
};

export default Home;