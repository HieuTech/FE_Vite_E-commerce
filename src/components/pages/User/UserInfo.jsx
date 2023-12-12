import React, { useState } from "react";
import "./UserInfo.scss"; // Import CSS file
import { Link } from "react-router-dom";
const UserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();

  const [avatar, setAvatar] = useState();
  const [bankAccount, setBankAccount] = useState();
  const [gender, setGender] = useState();
  const [phone,setPhone] = useState()


  const storedUser = localStorage.getItem("user");
  const userEmail = storedUser ? JSON.parse(storedUser).email : null;

  const handleSave = () => {
    // Thực hiện cập nhật thông tin người dùng ở đây
    // Sau đó, khi dữ liệu cập nhật thành công, bạn có thể gọi setIsEditing(false);
  };

  return (
    <div className="user-info-container">
      <h2>User Information</h2>
      <div className="user-info-item">
        <label>Name: {name}</label>
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="user-info-input"
          />
        ) : (
          <span></span>
        )}
      </div>
      <div className="user-info-item">
        <label>Phone:{phone}</label>
        {isEditing ? (
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="user-info-input"
          />
        ) : (
          <span></span>
        )}
      </div>
      <div className="user-info-item">
        <label>Email: {userEmail}</label>
      </div>

      <div className="user-info-item">
        <label>Bank Account:</label>
        {isEditing ? (
          <input
            type="text"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            className="user-info-input"
          />
        ) : (
          <span>{bankAccount}</span>
        )}
      </div>
      <div className="user-info-item">
        <label>Gender: {gender}</label>
        {isEditing ? (
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="user-info-input"
          />
        ) : (
          <span></span>
        )}
      </div>
      <div className="user-info-item">
        <label htmlFor="" className="user-info-item-avatar">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
            alt="user_avatar"
            className="avatar"
          />
          <input
            type="file"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="user-info-input"
          />
        </label>
      </div>

      <div className="btn">
        <Link to="/">
          <button onClick={handleSave} className="user-info-button">
            Save
          </button>
        </Link>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="user-info-button"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
