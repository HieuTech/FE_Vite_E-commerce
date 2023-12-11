import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart() {
  // Static data for demonstration
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1559735614-e35ef860a156?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.99,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // ... add more items as needed
  ];

  // Function to remove item from cart
  const handleRemoveItem = (itemId) => {
    console.log("Remove item:", itemId);
    // Implement the logic to remove item from cart
  };

  // Function to change quantity
  const handleChangeQuantity = (itemId, newQuantity) => {
    console.log(
      "Change quantity for item:",
      itemId,
      " New Quantity:",
      newQuantity
    );
    // Implement the logic to change the quantity
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  onClick={() =>
                    handleChangeQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    handleChangeQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* Calculation of total price can be added here */}
          <div className="cart-total">{/* Display total price */}</div>
          {/* Add checkout button */}
        </div>
      )}
      <Link to="/orders">Go to orders</Link>
    </div>
  );
}

export default Cart;
