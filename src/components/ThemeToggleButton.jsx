import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

export default function ThemeToggleButton() {

  const dispatch = useDispatch();

  const theme = useSelector(
    (state) => state.theme.theme
  );

  const isDark = theme === "dark";

  return (

    <button

      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"

      onClick={() =>
        dispatch(toggleTheme())
      }

      className={`
        relative
        w-[48px]
        h-[25px]
        rounded-full
        cursor-pointer
        overflow-hidden

        border
        transition-all
        duration-500

        ${
          isDark
            ? `
              bg-[#0b0b0b]
              border-orange-500/40

              shadow-[0_0_18px_rgba(255,120,0,0.25)]
              `
            : `
              bg-[#f1f5f9]
              border-slate-300

              shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)]
              `
        }
      `}

    >

      {/* BACKGROUND GLOW */}
      <span

        className={`
          absolute
          inset-0
          rounded-full
          transition-all
          duration-500

          ${
            isDark
              ? `
                bg-gradient-to-r
                from-orange-500/10
                via-transparent
                to-orange-500/10
                `
              : `
                bg-gradient-to-r
                from-white
                via-slate-100
                to-white
                `
          }
        `}

      />

      {/* STARS */}
      <span
        className={`
          absolute
          inset-0
          rounded-full
          overflow-hidden
          pointer-events-none
          transition-opacity
          duration-500

          ${
            isDark
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >

        {[
          { size: 2, top: 5, left: 6, delay: "0s" },
          { size: 1, top: 10, left: 10, delay: "0.6s" },
          { size: 2, top: 4, left: 16, delay: "1.1s" },
          { size: 1, top: 13, left: 7, delay: "1.7s" },
        ].map((s, i) => (

          <span
            key={i}
            className="absolute rounded-full bg-orange-200 animate-pulse"
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
            }}
          />

        ))}

      </span>

      {/* LIGHT CLOUDS */}
      <span
        className={`
          absolute
          inset-0
          rounded-full
          overflow-hidden
          pointer-events-none
          transition-opacity
          duration-500

          ${
            isDark
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >

        <span
          className="absolute w-4 h-[6px] rounded-full bg-white opacity-70"
          style={{ top: 5, left: 5 }}
        />

        <span
          className="absolute w-3 h-[4px] rounded-full bg-white opacity-50"
          style={{ top: 11, left: 15 }}
        />

      </span>

      {/* THUMB */}
      <span

        className={`
          absolute
          top-[2px]

          flex
          items-center
          justify-center

          w-[19px]
          h-[19px]
          rounded-full

          text-[10px]

          transition-all
          duration-[450ms]

          [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]

          ${
            isDark
              ? `
                translate-x-[25px]

                bg-gradient-to-br
                from-orange-400
                to-orange-600

                shadow-[0_0_15px_rgba(255,120,0,0.75)]
                `
              : `
                translate-x-[2px]

                bg-gradient-to-br
                from-white
                to-slate-200

                shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                `
          }
        `}

      >

        {
          isDark
            ? "🌙"
            : "☀️"
        }

      </span>

    </button>
  );
}