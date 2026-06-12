export default function HomeSearchComponent() {

  function searchClicked() {
    console.log("clicked")
  }

  return (
    <div className="w-full max-w-[92vw] sm:max-w-[700px] h-[50px] sm:h-[60px] lg:h-[70px] rounded-full border border-white/10 bg-black/[0.3] backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.04)] px-1 sm:px-2 flex items-center justify-between">
      <input
        type="text"
        placeholder="Ask Nexus AI anything..."
        className="flex-1 h-full bg-transparent outline-none px-4 text-[12px] sm:text-[14px] exo text-white placeholder:text-white/30"
      />

      <button 
        className="py-3 sm:py-3.5 px-5 sm:px-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white orbitron font-semibold text-[9px] sm:text-[10px] tracking-[1px] transition-all duration-300 shadow-[0_0_25px_rgba(0, 187, 255, 0.45)] whitespace-nowrap"
        onClick={() => searchClicked()}  
      >
        GENERATE
      </button>
    </div>
  );
}
