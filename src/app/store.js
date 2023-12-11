import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // thêm các reducers khác tại đây
  },
  // Nếu bạn muốn thêm middleware tùy chỉnh hoặc cấu hình khác, bạn có thể thêm chúng tại đây
});
