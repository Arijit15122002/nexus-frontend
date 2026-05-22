import Navigation from "../components/Navigation.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111111]">

      <Navigation />

      {/* Page Content */}
      <div className="">
        <Outlet />
      </div>

    </div>
  );
}