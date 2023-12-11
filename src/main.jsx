import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

// Bọc ứng dụng của bạn trong Provider và cung cấp store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);