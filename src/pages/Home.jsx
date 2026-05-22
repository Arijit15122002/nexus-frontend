import React from "react";
import { motion } from "framer-motion";
import { Pen } from "lucide-react";

import AiHead from "../assets/ai-head.png";

const Home = () => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-[#0a0a0a]">

      {/* BEYOND TEXT */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-[30%] sm:top-[20%] md:top-[10%] left-0 w-full z-10 flex flex-col items-center"
      >
        <div
          className="orbitron font-black leading-none text-white text-center w-full"
          style={{
            fontSize: "clamp(64px, 20vw, 230px)",
            letterSpacing: "clamp(-2px, -0.6vw, -12px)",
          }}
        >
          BEYOND
        </div>
        <div
          className="exo text-white/60 uppercase self-end pr-[5vw] mt-1"
          style={{ fontSize: "clamp(8px, 1.5vw, 22px)", letterSpacing: "clamp(4px, 1vw, 14px)" }}
        >
          HUMAN
        </div>
      </motion.div>

      {/* ROBOT — fills 75%+ of screen height on mobile */}
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{
          /* mobile: 115vw so it bleeds edge to edge and fills height */
          /* desktop: cap at 820px */
          width: "clamp(600px, 115vw, 820px)",
        }}
      >
        <img
          src={AiHead}
          alt="AI Head"
          className="w-full h-full object-contain object-bottom select-none"
          style={{
            /* force image to take 75% of viewport height on mobile */
            height: "clamp(700px, 78svh, 92svh)",
          }}
        />
      </motion.div>

      {/* LEFT PANEL — desktop only */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        className="absolute z-30 flex-col gap-4 hidden lg:flex"
        style={{
          left: "clamp(24px, 3vw, 48px)",
          bottom: "clamp(100px, 14vh, 160px)",
          width: "clamp(220px, 24vw, 360px)",
        }}
      >
        <div className="group w-full rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(255,120,0,0.18)]">
          <div className="orbitron text-white font-semibold text-[15px] tracking-[2px] group-hover:text-orange-400 transition-colors duration-300">
            AI MEMORY
          </div>
          <div className="mt-3 exo text-white/60 text-[12px] leading-relaxed">
            Persistent intelligent memory system with contextual understanding and real-time agent orchestration.
          </div>
        </div>
        <div className="group relative w-fit h-[58px] px-5 rounded-full overflow-hidden cursor-pointer flex items-center gap-4 border border-orange-500/20 bg-[#151515]/90 backdrop-blur-xl transition-all duration-500 hover:scale-[1.04] hover:border-orange-400 hover:shadow-[0_0_50px_rgba(255,120,0,0.35)]">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 w-[38px] h-[38px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,120,0,0.5)] transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shrink-0">
            <Pen className="w-4 h-4 text-white" />
          </div>
          <div className="relative z-10 flex flex-col leading-none">
            <span className="orbitron text-orange-400 uppercase tracking-[3px] text-[7px]">Start Building</span>
            <span className="mt-1 orbitron text-white tracking-[1.5px] text-[13px]">Get Started</span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT PANEL — desktop only */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        className="absolute z-30 hidden lg:flex flex-col items-center justify-end overflow-hidden"
        style={{
          right: "clamp(24px, 3vw, 48px)",
          bottom: "clamp(100px, 14vh, 160px)",
          width: "clamp(200px, 18vw, 260px)",
          height: "clamp(240px, 22vw, 320px)",
          borderRadius: "28px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(24px)",
          padding: "20px",
        }}
      >
        <div className="absolute w-full flex justify-center" style={{ top: 24 }}>
          <div className="absolute overflow-hidden border border-white/10 bg-[#111]" style={{ left: 16, top: 16, width: 80, height: 100, borderRadius: 16, transform: "rotate(-18deg)" }}>
            <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=400&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute overflow-hidden border border-white/10 bg-[#111]" style={{ right: 16, top: 16, width: 80, height: 100, borderRadius: 16, transform: "rotate(18deg)" }}>
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 overflow-hidden border border-white/10 bg-[#111]" style={{ width: 100, height: 130, borderRadius: 20 }}>
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-auto text-center">
          <div className="orbitron text-white text-[18px] tracking-[1px]">Stunning Details</div>
          <div className="mt-2 exo text-white/50 text-[12px] leading-relaxed">Futuristic textures and AI-generated visual assets.</div>
        </div>
      </motion.div>

      {/* SEARCH BAR */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-[3%] left-0 w-full z-40 flex justify-center px-4"
      >
        <div
          className="w-full rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center gap-2 px-2"
          style={{ maxWidth: "min(700px, 92vw)", height: "clamp(48px, 6vw, 60px)" }}
        >
          <input
            type="text"
            placeholder="Ask Nexus AI anything..."
            className="flex-1 min-w-0 h-full bg-transparent outline-none px-4 exo text-white placeholder:text-white/30"
            style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
          />
          <button
            className="shrink-0 rounded-full bg-blue-500 hover:bg-blue-600 text-white orbitron font-semibold tracking-[1px] transition-colors duration-300 shadow-[0_0_25px_rgba(0,187,255,0.4)] whitespace-nowrap"
            style={{
              height: "clamp(34px, 4vw, 42px)",
              paddingLeft: "clamp(14px, 2vw, 32px)",
              paddingRight: "clamp(14px, 2vw, 32px)",
              fontSize: "clamp(8px, 0.7vw, 10px)",
            }}
          >
            GENERATE
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;