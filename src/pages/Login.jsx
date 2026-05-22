import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";

import { useNavigate } from "react-router-dom";

import { Mail, Lock } from "lucide-react";

import Airobot from "../assets/login_robot.png";

export default function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;

      dispatch(loginSuccess(token));

      navigate("/chat");

    } catch (error) {

      console.log(error);

      alert("Login failed");
    }
  };

  return (

    <div className="w-screen h-screen overflow-hidden bg-white dark:bg-[#151515] transition-colors duration-300 flex items-center justify-center px-20">

      {/* Main Container */}
      <div className="w-full max-w-7xl h-[85vh] rounded-[32px] overflow-hidden bg-white dark:bg-[#151515] transition-colors duration-300 flex flex-row justify-center items-center">

        {/* LEFT SIDE */}
        <div className="h-[80%] bg-[#d9d9d9] relative flex items-center justify-center overflow-hidden rounded-4xl">

          <img
            src={Airobot}
            alt="AI Robot"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent" />

          {/* Text */}
          <div className="absolute bottom-10 left-10 z-10">

            <p className="text-gray-300 mt-3 text-lg max-w-md orbitron">
              Enter the future of intelligent conversations and AI-powered
              experiences.
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 h-full bg-white dark:bg-[#151515] transition-colors duration-300 flex items-center justify-center px-20">

          <form
            onSubmit={handleLogin}
            className="w-full max-w-md flex flex-col"
          >

            {/* Heading */}
            <div className="mb-10">

              <h2 className="text-4xl font-bold text-black dark:text-white transition-colors duration-300">
                Welcome Back
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
                Login to continue your AI journey.
              </p>

            </div>

            {/* Email Input */}
            <div className="w-full flex items-center gap-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl px-5 py-4 focus-within:border-blue-500 transition mb-5">

              <Mail className="text-blue-500 dark:text-blue-400 w-5 h-5" />

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-black dark:text-white outline-none w-full placeholder:text-gray-400 dark:placeholder:text-gray-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="w-full flex items-center gap-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl px-5 py-4 focus-within:border-orange-400 transition mb-3">

              <Lock className="text-orange-500 dark:text-orange-400 w-5 h-5" />

              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent text-black dark:text-white outline-none w-full placeholder:text-gray-400 dark:placeholder:text-gray-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mb-8">

              <button
                type="button"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-300 text-sm transition"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold text-lg hover:scale-[1.02] transition"
            >
              Login
            </button>

            {/* Footer */}
            <p className="text-center text-gray-600 dark:text-gray-500 text-sm mt-8 transition-colors duration-300">
              Powered by next generation AI systems.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}