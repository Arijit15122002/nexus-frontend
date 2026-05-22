import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navigation() {

  const { pathname } = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "About", href: "/about" },
  ];

  return (

    <nav className="w-full fixed top-0 left-0 z-50 px-8 backdrop-blur-xl transition-all duration-500 bg-white  dark:bg-[#111111]">

      <div className="max-w-[1400px] mx-auto h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="orbitron text-[18px] font-bold tracking-[2px] text-black dark:text-white transition-colors duration-500">
          Nexus<span className="text-orange-500">.AI</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (

            <Link
              key={link.href}
              to={link.href}
              className={`exo text-[14px] tracking-[1px] transition-all duration-300 ${
                pathname === link.href
                  ? "text-orange-500"
                  : "text-black/55 hover:text-orange-500 dark:text-white/50 dark:hover:text-orange-400"
              }`}
            >
              {link.label}
            </Link>

          ))}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Login */}
          <Link to="/login">

  <motion.button
    whileTap={{ scale: 0.96 }}
    className={`cursor-pointer px-[35px] pt-[9px] pb-[11px] rounded-3xl border text-[13px] exo tracking-[1px] transition-all duration-300 ${
      pathname === "/login"
        ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold border-blue-700 shadow-[0_0_25px_rgba(0, 177, 255, 0.95)]"
        : "text-white bg-gradient-to-br from-blue-500 to-blue-600 border-black/10 hover:bg-black/[0.03] dark:text-white/70 dark:border-white/[0.12] dark:hover:bg-white/[0.04] dark:hover:text-white"
    }`}
  >
    Login
  </motion.button>

</Link>

          {/* Register */}
          {/* <Link to="/register">

            <motion.button
              whileTap={{ scale: 0.96 }}
              className="px-[18px] py-[8px] rounded-xl bg-purple-700 hover:bg-orange-600 text-white exo text-[11px] tracking-[1px] font-semibold shadow-[0_0_20px_rgba(255,120,0,0.35)] transition-all duration-300"
            >
              Get Started
            </motion.button>

          </Link> */}

          {/* Divider */}
          <div className="w-px h-5 bg-black/10 dark:bg-white/10 transition-colors duration-500" />

          {/* Theme Toggle */}
          <ThemeToggleButton />

        </div>

      </div>

    </nav>
  );
}