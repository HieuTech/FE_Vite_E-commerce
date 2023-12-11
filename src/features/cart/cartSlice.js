import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu cho giỏ hàng
const initialState = {
  items: [], // Mảng để lưu trữ các sản phẩm trong giỏ hàng
  totalQuantity: 0, // Tổng số lượng sản phẩm trong giỏ hàng
  totalPrice: 0, // Tổng giá trị giỏ hàng
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //nếu sản phẩm có trong giỏ hàng

      if (!existingItem) {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      }
    },

    // Xóa sản phẩm khỏi giỏ hàng
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          // Giảm số lượng nếu sản phẩm có nhiều hơn 1
          existingItem.quantity--;
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
        } else {
          // Xóa sản phẩm khỏi giỏ hàng nếu số lượng là 1
          state.items = state.items.filter((item) => item.id !== id);
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
        }
      }
    },

    // Các reducers khác có thể được thêm ở đây
  },
});




// Xuất khẩu các actions
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;


// Xuất khẩu reducer
export default cartSlice.reducer;
