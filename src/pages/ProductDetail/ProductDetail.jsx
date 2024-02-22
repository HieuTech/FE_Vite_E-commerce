import React, { useState } from "react";
import "./ProductDetail.scss";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

import SocialMedia from "../Home/SocialMedia";
export default function ProductDetail() {
      const [mainImage, setMainImage] = useState(
        "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D"
      );
  const handleSubImageClick = (newSrc) => {
    setMainImage(newSrc);
  };

    const navigate = useNavigate()
    const handleAddToCart=(e)=>{
        const quantity = document.getElementById("quantity").value
        console.log(quantity);
    }

    const handleClick = ()=>{
        navigate("/shop")
    }
  return (
    <div>
      <Header />
      <div className="detail-container">
        {/* detail-header */}
        <div className="detail-grid">
          <div className="grid-item">
            <div className="detail-sub-img">
              <img
                className="sub-img"
                src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hinh anh"
                onClick={() => {
                  handleSubImageClick(
                    "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  );
                }}
              />
              <img
                className="sub-img"
                src="https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D"
                alt="hinh anh"
                onClick={() => {
                  handleSubImageClick(
                    "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D"
                  );
                }}
              />
              <img
                className="sub-img"
                src="https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D"
                alt="hinh anh"
                onClick={() => {
                  handleSubImageClick(
                    "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D"
                  );
                }}
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="detail-main-img">
              <img className="main-img" src={mainImage} alt="hinh anh" />
            </div>
          </div>
          <div className="grid-item">
            <div className="detail-content">
              <h1 className="title">Vegan Cake</h1>
              <span className="item-price">$72.00</span>
              <p className="item-desc">
                A spicy collaboration with Daring 🔥
                <p>
                  MADE WITH OUR OVERNIGHT RISING DOUGH, DARING PLANT CHICKEN,
                  CREAMY BUFFALO SAUCE, FRESH ONIONS, VEGAN PLANT-BASED CHEESE.
                </p>
                <p>6 - 14 OZ (397 G) PIZZAS NET WT. 84 OZ (2382 G)</p>
              </p>
              <label className="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="30"
                defaultValue={1}
              />

              <div className="btn">
                <button
                  className="add-to-cart"
                  onClick={() => {
                    handleAddToCart(event);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* detail-content */}
        <div className="detail-content">
          <div className="content-img">
            <img
              className="content-img"
              src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-world-vegan-day-event_23-2150801317.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div className="main-content">
            <h3 className="content-title">WHY VEGAN CAKE?</h3>
            <span>ONLY THE HIGHEST QUALITY INGREDIENTS</span>
            <p className="content-desc">
              Ingredients: Crust (Enriched Flour [Unbleached Wheat Flour, Malted
              Barley Flour, Niacin, Reduced Iron, Thiamin Mononitrate,
              Riboflavin, Folic Acid], Filtered Water, Yeast, Sea Salt, Olive
              Oil, Canola Oil, Organic Brown Sugar), Tomato Sauce (Tomatoes,
              Basil, Lemon Juice, Apple Cider Vinegar, Salt), Vegan Cheese
              (Filtered Water, Coconut Oil, Potato Starch, Tapioca Starch,
              Sunflower Oil, Sea Salt, Calcium Citrate, Natural Flavor [Vegan
              Sources], Chickpea Protein, Konjac and Xanthan Gums, Potato
              Protein, Annatto and Turmeric Extracts [color], Powdered Cellulose
              Added To Prevent Caking), Beyond Plant-Based Pepperoni Slices
              (Water, Refined Coconut Oil, Expeller-Pressed Canola Oil, Pea
              Protein*, Rice Starch, Cocoa Butter, Pea Starch, Salt,
              Methylcellulose, Natural Flavors [with Celery Oil], 2% or less of
              Rice Protein, Paprika, Yeast Extract, Mung Bean Starch, Garlic
              Powder, Spices [Including Mustard], Ascorbic Acid, Vegetable Juice
              Color, Red Beet Powder Color, Lycopene Color [from Tomato],
              Extractives of Paprika, Natural Smoke Flavor), Garlic. Contains:
              Wheat, Soy.
            </p>
          </div>
        </div>
        {/* another product */}
        <div className="another-product">
          <hr />
          <h3 className="another-title">YOU MIGHT ALSO LIKE</h3>
          <div className="another-grid">
            <div
              className="another-item"
              onClick={() => {
                handleClick();
              }}
            >
              <img
                className="another-img"
                src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hinhanh"
              />
              <h1 className="another-name">Coconut Cake</h1>
              <span className="another-price">$72.00</span>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}
