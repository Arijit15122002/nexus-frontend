import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || null,
  email: localStorage.getItem("email") || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload);
    },

    logout: (state) => {
      state.token = null;
      state.username = null;
      state.email = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
    },

    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;

      localStorage.setItem("username", action.payload.username);

      localStorage.setItem("email", action.payload.email);
    },
  },
});

export const { loginSuccess, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
