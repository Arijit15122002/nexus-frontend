import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";

export default function ThemeToggleButtonMobile() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.theme === "dark");

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      style={{
        position:        "relative",
        width:           52,
        height:          28,
        borderRadius:    999,
        cursor:          "pointer",
        border:          "none",
        padding:         0,
        outline:         "none",
        background:      isDark
          ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
          : "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)",
        boxShadow: isDark
          ? "inset 0 2px 6px rgba(0,0,0,0.6), inset 0 -1px 2px rgba(255,255,255,0.04)"
          : "inset 0 2px 6px rgba(0,0,0,0.12), inset 0 -1px 2px rgba(255,255,255,0.9)",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Track shimmer line */}
      <span
        style={{
          position:      "absolute",
          top:           "50%",
          left:          8,
          right:         8,
          height:        1,
          transform:     "translateY(-50%)",
          borderRadius:  999,
          background:    isDark
            ? "rgba(255,255,255,0.06)"
            : "rgba(0,0,0,0.07)",
          transition:    "background 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Thumb */}
      <span
        style={{
          position:        "absolute",
          top:             4,
          left:            4,
          width:           20,
          height:          20,
          borderRadius:    "50%",
          background:      isDark
            ? "linear-gradient(145deg, #ffffff 0%, #cccccc 100%)"
            : "linear-gradient(145deg, #ffffff 0%, #d8d8d8 100%)",
          boxShadow:       isDark
            ? "0 2px 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.1)",
          transform:       isDark ? "translateX(24px)" : "translateX(0px)",
          transition:      "transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1), box-shadow 0.35s ease, background 0.4s ease",
          willChange:      "transform",
        }}
      />
    </button>
  );
}