import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/orders/orderSlice";
import authReducer from "../features/signUp/authSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
    // thêm các reducers khác tại đây
  },
  // Nếu bạn muốn thêm middleware tùy chỉnh hoặc cấu hình khác, bạn có thể thêm chúng tại đây
});
