import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Sử dụng useNavigate thay cho useHistory

import "./Orders.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setPhone,
  setAddress,
  setBank,
  setError,
} from "../../../features/orders/orderSlice";

function Orders() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const orderState = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPopupMomo, setShowPopupMomo] = useState(true);
  const [showPopupVCB, setShowPopupVCB] = useState(false);

  const touglePopup = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "momo") {
      setShowPopupMomo(!showPopupMomo);
      setShowPopupVCB(false);
    }
    if (value === "vietcombank") {
      setShowPopupVCB(!showPopupVCB);
      setShowPopupMomo(false);
    }
  };

  const handleInputChange = (e, actionCreator) => {
    dispatch(actionCreator(e.target.value));
  };

  const handleBankChange = (e) => {
    dispatch(setBank(e.target.value));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!orderState.name) newErrors.name = "Name is required";
    if (!orderState.phone) {
      newErrors.phone = "Phone Number is required";
    } else {
      const phonePattern = /^\+84\d{10}$/;
      if (!phonePattern.test(orderState.phone)) {
        newErrors.phone =
          "Phone number must be in the format +840xxxxxxxxx (10 digits).";
      }
    }
    if (!orderState.address) newErrors.address = "Address is required";
    if (!orderState.bank) newErrors.bank = "Please select a bank";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        name: orderState.name,
        phone: orderState.phone,
        address: orderState.address,
        bank: orderState.bank,
      };
          localStorage.setItem("Orders", JSON.stringify(userData));

      navigate("/orders-received");
    } else {
      dispatch(setError(validationErrors));
    }
  };


  return (
    <div className="orders-container">
      <div className="form-container">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="error-message">{orderState.error.name}</div>

          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={orderState.name}
            onChange={(e) => {
              handleInputChange(e, setName);
            }}
          />
          <div>
            <div className="error-message">{orderState.error.phone}</div>

            <label>Phone Number:</label>
            <input
              type="tel"
              value={orderState.phone}
              onChange={(e) => {
                handleInputChange(e, setPhone);
              }}
            />
          </div>
          <div>
            <div className="error-message">{orderState.error.address}</div>

            <label>Address:</label>
            <input
              type="text"
              value={orderState.address}
              onChange={(e) => {
                handleInputChange(e, setAddress);
              }}
            />
          </div>
          <div className="bank">
            <div className="bank-item">
              <label htmlFor="momo">
                <img
                  src="https://img.mservice.com.vn/app/img/portal_documents/mini-app_design-guideline_branding-guide-2-2.png"
                  alt="momo"
                  className="bank-img momo"
                />
              </label>
              <input
                type="radio"
                name="bank-brand"
                className="bank-input momo"
                id="momo"
                value="momo"
                checked={orderState.bank === "momo"}
                onChange={handleBankChange}
                onClick={touglePopup}
              />
            </div>

            <div className="bank-item">
              <label htmlFor="vietcombank">
                <img
                  src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-vietcombank-inkythuatso-10-10-45-11.jpg"
                  alt="vietcombank"
                  className="bank-img"
                />
              </label>
              <input
                type="radio"
                name="bank-brand"
                className="bank-input vietcombank"
                id="vietcombank"
                value="vietcombank" // Đặt giá trị cho radio button này
                checked={orderState.bank === "vietcombank"}
                onChange={handleBankChange}
                onClick={touglePopup}
              />
            </div>
          </div>

          <div className="error-message">{orderState.error.bank}</div>

          {showPopupMomo && (
            <div className="popup">
              <img
                src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"
                alt="QR"
                className="popup-img"
              />

              <div className="popup-title">
                <h2>Hoàng Lê Minh Hiếu</h2>
                <p>Nội dung chuyển khoản: Cake Order...</p>
              </div>
            </div>
          )}
          {showPopupVCB && (
            <div className="popup">
              <img
                src="https://media.qrtiger.com/static/img/Home/default-preview-qr2-min.png"
                alt="QR"
                className="popup-img"
              />

              <div className="popup-title">
                <h2>Hoàng Lê Minh Hiếu</h2>
                <p>Nội dung chuyển khoản: Cake Order...</p>
              </div>
            </div>
          )}
          <div className="order-summary">
            <h2>Order Summary</h2>

            <p className="totalPrice">Total Price:${totalPrice} </p>
          </div>

          <button className="btn" type="submit">
            Đặt Hàng
          </button>
        </form>
      </div>
    </div>
  );
}

export default Orders;
