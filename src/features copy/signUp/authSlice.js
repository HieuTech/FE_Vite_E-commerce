import { createSlice } from "@reduxjs/toolkit";
import validator from "validator";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  users: [],
  user: null,
  error: null,
  isSignedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const { email, password } = action.payload;

      if (!validator.isEmail(email)) {
        state.error = "Email không hợp lệ. Vui lòng kiểm tra lại.";
        return;
      }

      const passwordOptions = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
      };

      if (!validator.isStrongPassword(password, passwordOptions)) {
        state.error = "Mật khẩu không đủ mạnh. Vui lòng kiểm tra lại.";
        return;
      }

      try {
        const usersInLocalStorage =
          JSON.parse(localStorage.getItem("users")) || [];

        const newUser = {
          userId: uuidv4(),
          email,
          password,
        };
        usersInLocalStorage.push(newUser);

        localStorage.setItem("users", JSON.stringify(usersInLocalStorage));

        state.user = newUser;
        state.error = null;
      } catch (error) {
        state.error = "Đăng ký thất bại. Vui lòng thử lại sau.";
      }
    },
    signIn: (state, action) => {
      const { email, password } = action.payload;
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const foundUser = storedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        state.user = foundUser;
        state.isSignedIn = true;
        state.error = null;
        state.userId = foundUser.userId; // Trực tiếp cập nhật userId ở đây
      } else {
        state.error = "Email hoặc mật khẩu không chính xác. Vui lòng thử lại.";
      }
    },
    signOut: (state) => {
      state.user = null;
      state.isSignedIn = false;
      state.error = null;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { signUp, signIn, signOut,setUserId } = authSlice.actions;
export default authSlice.reducer;
