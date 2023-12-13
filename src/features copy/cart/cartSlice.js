import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersCart: {},

};

const saveCartStateToLocalStorage = (cartState) => {
  localStorage.setItem("cartState", JSON.stringify(cartState));
};

const loadCartStateFromLocalStorage = () => {
  const cartState = JSON.parse(localStorage.getItem("cartState")) || {};
  return cartState.usersCart;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { usersCart: loadCartStateFromLocalStorage() },
  reducers: {
    addItemToCart: (state, action) => {
      const { userId, newItem } = action.payload;
     if (!state.usersCart[userId]) {
       state.usersCart[userId] = {
         items: [],
         totalQuantity: 0,
         totalPrice: 0,
       };
     }
    const userCart = state.usersCart[userId];
    const existingItem = userCart.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        userCart.items.push({ ...newItem, quantity: 1 });
        userCart.totalQuantity++;
        userCart.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        userCart.totalQuantity++;
        userCart.totalPrice += newItem.price;
      }

       saveCartStateToLocalStorage({ usersCart: state.usersCart });


    },

    removeItemFromCart: (state, action) => {
      const { userId, itemId } = action.payload;
      const userCart = state.usersCart[userId];

      if (!userCart) {
        return;
      }

      const existingItem = userCart.items.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          userCart.totalQuantity--;
          userCart.totalPrice -= existingItem.price;
        } else {
          userCart.items = userCart.items.filter((item) => item.id !== itemId);
          userCart.totalQuantity--;
          userCart.totalPrice -= existingItem.price;
        }
      }

          saveCartStateToLocalStorage({ usersCart: state.usersCart });

    },

    clearCart: (state, action) => {
       const { userId } = action.payload;
       state.usersCart[userId] = { items: [], totalQuantity: 0, totalPrice: 0 };
       saveCartStateToLocalStorage({ usersCart: state.usersCart });
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
