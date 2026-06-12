import { useDispatch, useSelector } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../redux/slices/themeSlice";

export default function ThemeToggleButton() {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state) => state.theme.theme
  );

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`
        h-10
        w-10
        rounded-xl
        flex
        items-center
        justify-center
        transition-all
        duration-300
        cursor-pointer
        ${
          isDark
            ? "bg-[#eeeeee] text-[#232323]"
            : "bg-[#232323] text-[#eeeeee]"
        }
      `}
    >
      <div
        className="
          transition-all
          duration-500
          hover:rotate-360
        "
      >
        {isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </div>
    </button>
  );
}