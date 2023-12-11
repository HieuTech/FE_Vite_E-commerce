import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignIn.scss"; // Import file CSS

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-container">
      <h2>Đăng nhập</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-signin">
          Đăng nhập
        </button>
      </form>
      <Link to="/">
        Go To Home Page
      </Link>
    </div>
  );
};

export default SignIn;
