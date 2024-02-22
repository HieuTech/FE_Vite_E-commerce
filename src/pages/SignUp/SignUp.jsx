import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  
    const handleSignUp =()=>{
      
    }
  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
     
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
          
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="text"
            className="form-control"
          
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
