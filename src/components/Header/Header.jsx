import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"; // Import CSS file
import { useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <img
            src="https://preview.colorlib.com/theme/cake/img/logo.png.webp"
            alt=""
          />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#!">About</a>
            </li>
            <li className="header__nav-item">
              <Link to="/product">Product</Link>
            </li>
            <li className="header__nav-item">
              <a href="#!">Blog</a>
            </li>
            <li className="header__nav-item">
              <a href="#!">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header__user">
          <ul className="header__user-list">
            <li className="header__user-item">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="header__user-item">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="header__user-item">
              <Link to="/cart">
                <i className="fa fa-shopping-cart "></i>
                Cart
                <span className="totalQuantity">{totalQuantity}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
