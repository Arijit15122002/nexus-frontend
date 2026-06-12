import { NavLink, Outlet } from "react-router-dom";
import SideNavigation from "../components2/Main/SideNavigation.jsx";
import Navigation from "../components2/Main/Navigation.jsx";
import BottomNavigation from "../components2/Main/BottomNavigation.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Cross, LogIn, X } from "lucide-react";
import ThemeToggleButtonMobile from "../components2/Main/ThemeToggleButtonMobile.jsx";

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const deviceType = useSelector((state) => state.device.deviceType);
  console.log(deviceType);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex h-[100dvh] bg-white dark:bg-[#232323] transition-all duration-500">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 z-20 w-full h-18 md:h-20">
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex min-w-20 lg:w-24 justify-end items-center z-30">
        <div className="w-[70px] h-[93%] rounded-xl flex items-center justify-center">
          <SideNavigation />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className={`${isAuthenticated ? "fixed" : "hidden"} md:hidden fixed bottom-0 left-0 w-full z-20`}>
        <BottomNavigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-20">
        <Outlet />
      </div>

      {deviceType === "mobile" && (
        <div
          className={`${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"} fixed inset-0 z-50 transition-all
    duration-500 backdrop-blur-2xl bg-white/20 dark:bg-[#232323]/10 flex flex-col justify-center items-center`}
        >
          <div className="h-full w-full relative">
            {/* close button */}
            <div
              className="h-18 flex flex-row justify-end items-center cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <div className="mr-6 p-2.5 rounded-full bg-[#fafafa] dark:bg-transparent dark:text-white shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
                <X size={18} strokeWidth={0.8} />
              </div>
            </div>

            {/* optioins */}
            <div className="flex flex-col pt-6 px-10 gap-5 transition-all duration-300 exo">
              <div className=" text-xl tracking-wider px-6 py-3 rounded-xl bg-[#fafafa] dark:bg-[#111111] text-[#343434] dark:text-[#dedede] shadow-[0_8px_40px_rgba(0,0,0,0.07)]" onClick={() => setMenuOpen(false)}>
                About us
              </div>
              <div className=" text-xl tracking-wider px-6 py-3 rounded-xl bg-[#fafafa] dark:bg-[#111111] text-[#343434] dark:text-[#dedede] shadow-[0_8px_40px_rgba(0,0,0,0.07)]" onClick={() => setMenuOpen(false)}>
                Websites
              </div>
              <div className=" text-xl tracking-wider px-6 py-3 rounded-xl bg-[#fafafa] dark:bg-[#111111] text-[#343434] dark:text-[#dedede] shadow-[0_8px_40px_rgba(0,0,0,0.07)]" onClick={() => setMenuOpen(false)}>
                Profiles
              </div>
              <div className=" text-xl tracking-wider px-6 py-3 rounded-xl bg-[#fafafa] dark:bg-[#111111] text-[#343434] dark:text-[#dedede] shadow-[0_8px_40px_rgba(0,0,0,0.07)] flex flex-row justify-between items-center" onClick={() => setMenuOpen(false)}>
                <div>Theme</div>
                <ThemeToggleButtonMobile />
              </div>

              <div className="w-full h-[0.5px] rounded-3xl bg-[#232323] dark:bg-white my-3"></div>

              {/* sign in */}
              <div className="px-6">
                <NavLink to="/login" className="text-2xl tracking-wider exo text-[#343434] dark:text-[#fafafa] flex flex-row items-center gap-4" onClick={() => setMenuOpen(false)}>
                  <LogIn size={30} strokeWidth={1} />{" "}
                  <span className="mb-0.5"> Sign in</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
