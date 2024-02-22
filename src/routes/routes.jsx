import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import OrderReceived from "../pages/Order-Received/OrderReceived";
import Checkout from "../pages/Checkout/Checkout";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ProductPage from "../pages/Shop/Shop";
import UserInfo from "../pages/User/UserInfo";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

export default function RouterLink() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/order-received" element={<OrderReceived />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
