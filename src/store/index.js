import { configureStore } from "@reduxjs/toolkit";
import { categoryAction } from "./slices/category.slice";
import { productReducer } from "./slices/product.slice";
import { categoryReducer } from "./slices/category.slice";
export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    categoryReducer: categoryReducer,
  },
});

store.dispatch(categoryAction.findAll())