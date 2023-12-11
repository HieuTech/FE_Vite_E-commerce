import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignUp from './components/pages/SignUp/SignUp';
import SignIn from "./components/pages/SignIn/SignIn";
import Product from "./components/pages/Product/Product";
import Cart from "./components/pages/Cart/Cart";
import Orders from "./components/pages/Orders/Orders";
import Order_Received from "./components/pages/Order-Received/OrderReceived";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders-received" element={<Order_Received />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
