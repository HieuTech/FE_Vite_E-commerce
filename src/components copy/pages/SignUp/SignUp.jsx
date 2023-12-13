import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../features/signUp/authSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);

  

  const handleSignUp = (e) => {
    // Gọi reducer signUp từ authSlice
    e.preventDefault();

    dispatch(signUp({ email, password }));

  };

  useEffect(() => {
    if (user) {
      navigate("/signin"); 
    }
  }, [user, navigate]);
 
  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      <Link to="/signin" className="sign-in-link">
        Already have an account? Sign In
      </Link>
    </div>
  );
}

export default SignUp;
