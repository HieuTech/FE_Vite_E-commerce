
import "./OrderReceived.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./OrderReceived.scss"; // Đã thêm className
import { clearCart } from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
function OrderReceived() {
  // Static data for demonstration
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const orderState = useSelector((state) => state.order);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
    navigate('/');
  };
  return (
    <div className="order-received-container">
      <h2>Order Successfully Placed</h2>
      <p>Thank you {orderState.name} for your order.</p>
      <p>Order will be delivered to: {orderState.address}</p>
      <h3>Order Details:</h3>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart-item-price">Giá: ${totalPrice}</p>

      <button className="btn-order-received"
        onClick={() => {
          handleClearCart();
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default OrderReceived;
