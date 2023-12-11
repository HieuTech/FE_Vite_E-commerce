import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";

function Orders() {
  const [name, setName] = useState("Minh Hieu");
  const [phone, setPhone] = useState("0375093122");
  const [address, setAddress] = useState("Tokyo Japan");

  // Static order data for demonstration
  const orderItems = [
    { id: 1, name: "Product 1", price: 10.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 15.99, quantity: 1 },
    // ... add more items as needed
  ];

  const totalPrice = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Order details:", { name, phone, address, orderItems });
    // Implement the logic to process the order
  };

  return (
    <div className="orders-container">
      <div className="form-container">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="bank">
            <div className="bank-item">
              <label for="techcombank">
                <img
                  src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-TCB-V.png"
                  alt="techcombank"
                  className="bank-img"
                />
              </label>
              <input
                type="radio"
                name="bank-brand"
                class="bank-input techcombank"
                id="techcombank"
              />
            </div>
            <div className="bank-item">
              <label for="vietcombank">
                <img
                  src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-vietcombank-inkythuatso-10-10-45-11.jpg"
                  alt="vietcombank"
                  className="bank-img"
                />
              </label>
              <input
                type="radio"
                name="bank-brand"
                class="bank-input vietcombank"
                id="vietcombank"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {orderItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price} x {item.quantity}
            </p>
          </div>
        ))}
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <Link to="/orders-received">Proceed to Order</Link>
      </div>
    </div>
  );
}

export default Orders;
