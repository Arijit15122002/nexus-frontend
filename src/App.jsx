import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import MainLayout from "./Layouts/MainLayout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { initializeTheme } from "./redux/slices/themeSlice.js";
import DeviceDetector from "./utils/DeviceDetector.jsx";

const Home2 = lazy(() => import("./pages/Home2.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTheme());
  }, []);

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <>
      <DeviceDetector />
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
        
          <Routes>
            <Route element={<MainLayout />}>
              <Route
              path="/"
              element={
                isAuthenticated
                  ? <Navigate to="/chat" replace />
                  : <Home2 />
              }
            />
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
