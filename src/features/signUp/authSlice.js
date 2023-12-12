import { createSlice } from "@reduxjs/toolkit";
import validator from "validator";
const initialState = {
  user: null, //
  error: null, //
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
      // Quy tắc cho mật khẩu
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
        // Thực hiện tác vụ đăng ký ở đây nếu email và password hợp lệ
        const user = action.payload; // Thay bằng dữ liệu thực tế từ máy chủ
        localStorage.setItem("user", JSON.stringify(user));

        state.user = user;
        state.error = null;
      } catch (error) {
        state.error = "Đăng ký thất bại. Vui lòng thử lại sau.";
      }
    },
    signIn: (state, action) => {

      const { email, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        state.user = storedUser;
        state.error = null;
      } else {
        state.error = "Email hoặc mật khẩu không chính xác. Vui lòng thử lại.";
      }
    },
  },
});

export const { signUp, signIn } = authSlice.actions;
export default authSlice.reducer;
