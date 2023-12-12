import { Link } from "react-router-dom";
import "./OrderReceived.scss";
import React from "react";
import { useSelector } from "react-redux";
import "./OrderReceived.scss"; // Đã thêm className

function OrderReceived() {
  // Static data for demonstration
  const orderState = useSelector((state) => state.order);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.items);

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
      <Link to="/" className="go-home-link">
        Go to Home Page
      </Link>
    </div>
  );
}

export default OrderReceived;
