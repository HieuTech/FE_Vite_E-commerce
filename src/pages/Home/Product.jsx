import React from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 99,
    img: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Product 2",
    price: 139,
    img: "https://images.unsplash.com/photo-1559735614-e35ef860a156?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Product 3",
    price: 179,
    img: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Product 4",
    price: 189,
    img: "https://plus.unsplash.com/premium_photo-1668703458969-d2407d2f720f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Product 5",
    price: 169,
    img: "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Product 6",
    price: 149,
    img: "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Product 7",
    price: 129,
    img: "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Product 8",
    price: 199,
    img: "https://plus.unsplash.com/premium_photo-1663924748884-7a288d61eb8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ProductPage = () => {
  const dispatch = useDispatch();


  const handleAddToCart = (product) => {
   
  };

  return (
    <div>
      <hr />

      <div className="product-container">
        <div className="intro-img">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hinhanh"
          />
        </div>
        <div className="intro">
          <h2 className="intro-title">
            NEW PEPPERONI PIZZA NOW MADE WITH BEYOND MEAT!
          </h2>
          <p className="intro-desc">
            NY-style hand-tossed crust topped with our Signature Tomato Sauce,
            new Vegan Cheese, Fresh Garlic, and the deliciously crispy & savory
            Beyond Meat Plant-Based Pepperoni slices.
          </p>
          <button className="btn btn-order">ORDER NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
