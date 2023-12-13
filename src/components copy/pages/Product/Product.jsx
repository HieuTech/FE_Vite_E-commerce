import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import React from "react";
import "./Product.scss"; // Make sure to create an accompanying SCSS file for styling

// Dummy data for the products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$99.99",
    img: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    img: "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D",
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
  // Function to handle adding a product to the cart
  const handleAddToCart = (productId) => {
    console.log("Product added to cart:", productId);
    // Implementation for adding product to cart goes here...
  };

  return (
    <>
    <Header/>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.img}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
        <Link to="/cart" className="goToCart">Go to Cart</Link>
      </div>
      <Footer/>
    </>
  );
};

export default ProductPage;
