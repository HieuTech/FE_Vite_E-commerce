import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/pages/SignUp/SignUp";
import SignIn from "./components/pages/SignIn/SignIn";
import Product from "./components/pages/Product/Product";
import UserInfo from "./components/pages/User/UserInfo";
import Cart from "./components/pages/Cart/Cart";
import Orders from "./components/pages/Orders/Orders";
import Order_Received from "./components/pages/Order-Received/OrderReceived";
// import ChatPlugin from "./components/ChatPlugin/ChatPlugin";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Orders />} />
          <Route path="/orders-received" element={<Order_Received />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        {/* <ChatPlugin /> */}
      </>
    </Router>
  );
}

export default App;
