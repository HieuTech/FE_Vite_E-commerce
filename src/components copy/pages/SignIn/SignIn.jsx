import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./SignIn.scss"; // Import file CSS
import { signIn } from "../../../features/signUp/authSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const authState = useSelector((state) => state.auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (authState.isSignedIn) {
      // Nếu đã đăng nhập thành công, chuyển hướng đến trang chính
      navigate("/");
    }
  }, [authState.isSignedIn, navigate]);

  return (
    <div className="signin-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSignIn}>
        {error && <p>{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
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
      <Link to="/signup">You have no account -- Sign Up Now</Link>
    </div>
  );
};

export default SignIn;
