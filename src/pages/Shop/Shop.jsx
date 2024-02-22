import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";

import "./Shop.scss"; // Make sure to create an accompanying SCSS file for styling

// Dummy data for the products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$99.99",
    img: "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$199.99",
    img: "https://images.unsplash.com/photo-1559735614-e35ef860a156?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$299.99",
    img: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$399.99",
    img: "https://plus.unsplash.com/premium_photo-1668703458969-d2407d2f720f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$499.99",
    img: "https://plus.unsplash.com/premium_photo-1672363353886-a106864f5cb9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$599.99",
    img: "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Product 7",
    price: "$699.99",
    img: "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Product 8",
    price: "$799.99",
    img: "https://plus.unsplash.com/premium_photo-1663924748884-7a288d61eb8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

 

const ProductPage = () => {
  const navigate = useNavigate();
  // Function to handle adding a product to the cart
const handleClick = (id)=>{
  navigate("/product-detail")
}

  return (
    <>
      <Header />
      <h3 className="shop-title">ORDER ONLINE</h3>
      <div className="shop_search">
        <input
          type="text"
          placeholder="Cake...."
          className="shop_search_input"
          autoFocus
        />
        <button className="btn-search">Search</button>
      </div>
      <div className="category">
        <h1 className="shop-pizza">PIZZA</h1>
        <h1 className="shop-cake">CAKE</h1>
        <h1 className="shop-herbal-tea">HERBAL TEA</h1>
        <h1 className="shop-hotpot">NOODLES & HOTPOT</h1>
      </div>
      <div className="sort">
        <span className="sort_title">Sort By</span>
        <button className="btn_sort">Best Seller</button>
        <button className="btn_sort ">On Sale</button>
        <select name="price" id="" className="sort_price">
          <option value="">Price</option>
          <option value="">High To Low</option>
          <option value="">Low To High</option>
        </select>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => {
              handleClick(product.id);
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      <hr />
      <Footer />
    </>
  );
};

export default ProductPage;
