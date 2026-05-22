import React from "react";

import AiHead from "../assets/ai-head.png";
import HomeSearchComponent from "../components/HomeSearchComponent";
import {motion} from "framer-motion";
import { MoveRight, Pen } from "lucide-react";
import CarousalComponent from "../components/CarousalComponent";

export default function Home() {
  return (
    <div className="h-[100dvh] w-full flex justify-center items-center ">
      {/* making the alpha object */}
      <div className="flex flex-col items-center mt-[500px] sm:mt-[400px] md:mt-[300px] lg:mt-[200px] xl:mt-[180px]  h-full w-auto">
        
        <motion.div
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=""
      >
        <div className="flex flex-col transition-all duration-500">
          <div className="w-full flex justify-end pr-10 sm:pr-12 md:pr-14 lg:pr-20">
            <div className="text-[11px] sm:text-[16px] md:text-[22px] lg:text-[28px] tracking-[6px] sm:tracking-[10px] md:tracking-[12px] uppercase exo text-black/60 dark:text-white/60">
              HUMAN
            </div>
          </div>
          <div className="text-[#111] lg:-mt-10 dark:text-white orbitron font-black leading-none tracking-[-2px] sm:tracking-[-6px]  text-[100px] sm:text-[110px] md:text-[180px] lg:text-[220px] transition-all duration-500">
            BEYOND
          </div>
        </div>
        </motion.div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:-bottom-[50px] z-20 flex justify-center w-full">
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            className=""
          >
          <img
            src={AiHead}
            alt=""
            className="min-h-[500px] max-h-[700px] w-[700px] object-cover object-center pointer-events-none"
          /></motion.div>

          <div className="flex w-full flex flex-row justify-between items-start  absolute top-1/3 md:px-20 z-40 pointer-events-none">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
              className="hidden md:flex flex-col items-end gap-5 z-20 w-[300px] lg:w-[380px] mb-[14vh]"
            >
              {/* CARD */}
              <div className="group rounded-[32px] border border-white/10 bg-blck/[0.03] dark:bg-white/[0.01] backdrop-blur-lg shadow-[0_0_40px_rgba(0,0,0,0.12)] dark:shadow-[0_0_40px_rgba(255,255,255,0.03)] p-7 transition-all duration-500 hover:-translate-y-2">
                <div className="orbitron text-black dark:text-white font-semibold text-[16px] tracking-[2px] group-hover:text-orange-400 transition-all duration-300">
                  AI MEMORY
                </div>

                <div className="mt-4 exo text-black/60 dark:text-white/60 text-[13px] leading-[25px]">
                  Persistent intelligent memory system with contextual
                  understanding and real-time agent orchestration.
                </div>
              </div>

              {/* BUTTON */}
              <div 
			  		className="flex flex-row justify-center items-center group bg-gradient-to-b from-orange-400 to-orange-600 transition-all duration-300 rounded-[32px] p-2 gap-2 exo text-white font-semibold text-[16px] tracking-[2px] border border-orange-600 border-2 cursor-pointer shadow-none hover:shadow-[0_0_50px_rgba(255,147,46,0.12)] transition-all duration-300 pointer-events-auto"
					onClick={() => {
						console.log("Clicked")
					}}
				>
					<div className="rounded-full bg-gradient-to-b from-orange-400 to-orange-600 border-orange-600 border-2 p-2">
						<Pen className="w-5 h-5 text-white" />
					</div>
					<div className="font-light text-sm">
						Start Building
					</div>
					<div className="rounded-full bg-gradient-to-b from-orange-400 to-orange-600 border-orange-600 border-2 p-2">
						<MoveRight className="w-5 h-5 text-white" />
					</div>
              </div>
            
			</motion.div>
            <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:flex pointer-events-auto"
        >
              
              <CarousalComponent />
            
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 w-full flex justify-center z-30">
          <HomeSearchComponent />
        </div>
      </div>
    </div>
  );
}
