import React, { useState } from "react";
import Header from "../Header/Header";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Styles/Login.css";

export default function Auth() {
  const [action, setAction] = useState("");

  const handleRegisterLink = () => {
    setAction("active");
  };

  const handleLoginLink = () => {
    setAction("");
  };

  return (
    <>
      <Header />
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={handleRegisterLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="email" required />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account? <a href="#" onClick={handleLoginLink}>Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
