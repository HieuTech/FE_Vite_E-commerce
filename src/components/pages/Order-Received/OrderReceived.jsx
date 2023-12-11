import { Link } from "react-router-dom";
import "./OrderReceived.scss";
import React from 'react';

function OrderReceived() {
    // Static data for demonstration
    const customerName = "Minh Hieu";
    const customerAddress = "Tokyo Japan";
    const orderDetails = [
        { id: 1, name: "Product 1", quantity: 2 },
        { id: 2, name: "Product 2", quantity: 1 },
        // ... other ordered items
    ];

    return (
      <div className="order-received-container">
        <h2>Order Successfully Placed</h2>
        <p>Thank you, {customerName}, for your order.</p>
        <p>Order will be delivered to: {customerAddress}</p>
        <h3>Order Details:</h3>
        <ul>
          {orderDetails.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <Link to="/">Order completed</Link>
      </div>
    );
}

export default OrderReceived;
