import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { lazy, Suspense, useEffect } from 'react';
import MainLayout from './Layouts/MainLayout.jsx';
import { useDispatch } from 'react-redux';
import { initializeTheme } from './redux/slices/themeSlice.js';

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
    <BrowserRouter>

      <Suspense fallback={<h1>Loading...</h1>}>

        <Routes >

          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
          </Route>

        </Routes>

      </Suspense>

    </BrowserRouter>
  )
}

export default App