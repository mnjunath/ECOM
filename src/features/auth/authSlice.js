import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedExpiry = localStorage.getItem("sessionExpiry");

const initialState = {
  user: storedUser || null,
  isAuthenticated: storedUser ? true : false,
  sessionExpiry: storedExpiry ? Number(storedExpiry) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { name, email, password } = action.payload;

      const userData = { name, email, password };

      localStorage.setItem("registeredUser", JSON.stringify(userData));
    },

    login: (state, action) => {
      const { email, password } = action.payload;

      const registeredUser = JSON.parse(
        localStorage.getItem("registeredUser")
      );

      if (
        registeredUser &&
        registeredUser.email === email &&
        registeredUser.password === password
      ) {
        const expiry = Date.now() + 5 * 60 * 1000; 

        state.user = registeredUser;
        state.isAuthenticated = true;
        state.sessionExpiry = expiry;

        localStorage.setItem("user", JSON.stringify(registeredUser));
        localStorage.setItem("sessionExpiry", expiry);
      } else {
        throw new Error("Invalid credentials");
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.sessionExpiry = null;

      localStorage.removeItem("user");
      localStorage.removeItem("sessionExpiry");
    },

    updateProfile: (state, action) => {
      const updatedUser = action.payload;

      state.user = updatedUser;

      localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
      localStorage.setItem("user", JSON.stringify(updatedUser));
    },
  },
});

export const { register, login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
