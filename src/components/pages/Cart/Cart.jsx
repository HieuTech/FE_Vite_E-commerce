import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";

import { removeItemFromCart } from "../../../features/cart/cartSlice";

const  Cart= ()=> {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
   console.log(itemId);
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">Giá: ${item.price}</p>
              <p className="cart-item-quantity">Số lượng: {item.quantity}</p>

              <button
                className="remove-button"
                onClick={() => {
                  handleRemoveItem(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="totalPrice">Total Price: ${totalPrice}</p>
      <p className="totalQuantity">Total Quantity: {totalQuantity}</p>

      <Link to="/orders" className="go-to-orders-link">
        Go to orders
      </Link>
    </div>
  );
}

export default Cart;
