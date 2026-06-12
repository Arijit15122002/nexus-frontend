import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import MainLayout from "./Layouts/MainLayout.jsx";
import { useDispatch } from "react-redux";
import { initializeTheme } from "./redux/slices/themeSlice.js";
import Home2 from "./pages/Home2.jsx";
import DeviceDetector from "./utils/DeviceDetector.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTheme());
  }, []);

  return (
    <>
      <DeviceDetector />
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home2 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat" element={<Chat />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
