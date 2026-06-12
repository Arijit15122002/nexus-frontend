import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    title: "Neural Core",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    title: "Cyber Mind",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    title: "Synthetic Soul",
  },
];

export default function CarousalComponent() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const left = slides[(index - 1 + slides.length) % slides.length];

  const center = slides[index];

  const right = slides[(index + 1) % slides.length];

  return (
    <div className="relative w-[330px] h-[320px] flex flex-col items-center justify-center">
      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-0 top-[38%] -translate-y-1/2 z-50 w-9 h-9 rounded-full border border-white/10 bg-white dark:bg-[#111] flex items-center justify-center text-black dark:text-white shadow-[0_10px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_0_30px_rgba(255,120,0,0.45)] transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={16} className="text-black dark:text-white" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-0 top-[38%] -translate-y-1/2 z-50 w-9 h-9 rounded-full border border-white/10 bg-white dark:bg-[#111] flex items-center justify-center text-black dark:text-white shadow-[0_10px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_0_30px_rgba(255,120,0,0.45)] transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={16} className="text-black dark:text-white" />
      </button>

      {/* CARDS */}
      <div className="relative w-full h-[210px] flex items-center justify-center">
        {/* LEFT */}
        <motion.div
          key={left.id}
          initial={{ opacity: 0, x: -60, rotate: -20, scale: 0.5 }}
          animate={{ opacity: 0.35, x: -90, rotate: -14, scale: 0.82 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-10"
        >
          <Card slide={left} />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          key={right.id}
          initial={{ opacity: 0, x: 60, rotate: 20, scale: 0.5 }}
          animate={{ opacity: 0.35, x: 90, rotate: 14, scale: 0.82 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-10"
        >
          <Card slide={right} />
        </motion.div>

        {/* CENTER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={center.id}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 40,
              rotateX: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: -40,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute z-30"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Card slide={center} active />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* GLOW */}
        <div className="absolute w-[120px] h-[120px] rounded-full bg-orange-500/20 blur-[80px]" />
      </div>

      {/* TEXT */}
      <motion.div
        key={center.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-5 flex flex-col items-center text-center"
      >
        <div className="orbitron text-black dark:text-white text-[18px] tracking-[1px]">
          {center.title}
        </div>

        <div className="mt-2 exo text-black dark:text-white/40 text-[11px] leading-[20px] max-w-[240px]">
          AI-generated futuristic assets with cinematic cyberpunk aesthetics.
        </div>
      </motion.div>
    </div>
  );
}

function Card({ slide, active }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-[24px]
        border border-white/10 bg-[#0d0d0d]
        transition-all duration-500
        backdrop-blur-2xl
        ${
          active
            ? "w-[145px] h-[190px] shadow-[0_0_50px_rgba(255,120,0,0.25)]"
            : "w-[110px] h-[145px]"
        }
      `}
    >
      {/* IMAGE */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

      {/* CYBER GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.18),transparent_60%)]" />

      {/* REFLECTION */}
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[18deg]"
      />

      {/* TITLE */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center">
        <div className="exo text-black dark:text-white text-[10px] tracking-[1px]">
          {slide.title}
        </div>
      </div>
    </div>
  );
}
