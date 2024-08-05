import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./csss/Login.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../assets/logo.png";
// import { history } from "../history";

const Login = () => {
  const [action, setAction] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    if (email.length < 3) {
      toast.error("Email must be at least 3 characters long.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      navigate("/mainpage");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Signup failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google sign-in successful");
      navigate("/mainpage");
    } catch (err) {
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <div className="flip-card-container">
          <label className="switch">
            <input
              type="checkbox"
              className="toggle"
              onChange={() => setAction(action === "active" ? "" : "active")}
            />
            <span className="slider"></span>
            <span className="card-side"></span>

            <div className="flip-card__inner">
              <div
                className={`flip-card__front ${action === "" ? "active" : ""}`}
              >
                <form className="flip-card__form" onSubmit={handleSignin}>
                  <div className="project-header">
                    <img
                      src={icon}
                      alt="de-mentor icon"
                      className="project-icon"
                    />
                  </div>
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="password-container">
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type={show ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label
                      className="toggle-password"
                      onClick={() => setShow(!show)}
                    >
                      <i
                        className={show ? "fas fa-eye-slash" : "fas fa-eye"}
                      ></i>
                    </label>
                  </div>
                  <button className="flip-card__btn" type="submit">
                    Let&apos;s go!
                  </button>
                  <div className="forgot">
                    <Link
                      to="/forgot-password"
                      onClick={() => setAction("forgot")}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                    <button
                      type="button"
                      className="flip-card__btn google-signin"
                      onClick={handleGoogleSignIn}
                    >
                      Google Sign in
                    </button>
                </form>
              </div>

              <div
                className={`flip-card__back ${
                  action === "active" ? "active" : ""
                }`}
              >
                <form className="flip-card__form" onSubmit={handleSignup}>
                  <img
                    src={icon}
                    alt="de-mentor icon"
                    className="project-icon"
                  />
                  <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="text"
                    required
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="password-container">
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type={show ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label
                      className="toggle-password"
                      onClick={() => setShow(!show)}
                    >
                      <i
                        className={show ? "fas fa-eye-slash" : "fas fa-eye"}
                      ></i>
                    </label>
                  </div>
                  <input
                    className="flip-card__input"
                    placeholder="Confirm Password"
                    type={show ? "text" : "password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                    <button className="flip-card__btn" type="submit">
                      Confirm!
                    </button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
