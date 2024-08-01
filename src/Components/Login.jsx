import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [action, setAction] = useState(''); 
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate('/mainpage');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created successfully");
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  const register = (e) => {
    e.preventDefault();
    setAction('active');
  };

  const loginlink = (e) => {
    e.preventDefault();
    setAction('');
  };

  const resetlink = (e) => {
    e.preventDefault();
    setAction('forgot');
  };

  const handleshow = () => {
    setShow(!show);
  };




  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            {/* Login Form */}
            <div className={`flip-card__front ${action === '' ? 'active' : ''}`}>
              <div className="title">Log in</div>
              <form className="flip-card__form" onSubmit={handleSignin}>
                {error && <p className="error">{error}</p>}
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type={show ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="show-password" onClick={handleshow}>Show</label>
                <button className="flip-card__btn" type="submit" >Let’s go!</button>
                <div className="forgot">
                  <a href="#" onClick={resetlink}>Forgot Password</a>
                </div>
                <div className="register">
                  <p>Don’t have an account? <a href="#" onClick={register}>Sign UP</a></p>
                </div>
              </form>
            </div>
            {/* Sign-Up Form */}
            <div className={`flip-card__back ${action === 'active' ? 'active' : ''}`}>
              <div className="title">Sign up</div>
              <form className="flip-card__form" onSubmit={handleSignup}>
                {error && <p className="error">{error}</p>}
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
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type={show ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  className="flip-card__input"
                  placeholder="Confirm Password"
                  type={show ? 'text' : 'password'}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label className="show-password" onClick={handleshow}>Show</label>
                <button className="flip-card__btn" type="submit">Confirm!</button>
                <div className="register">
                  <p>Already have an account? <Link to="/login" onClick={loginlink}>Log In</Link></p>
                </div>
              </form>
            </div>
            {/* Reset Password Form */}
            <div className={`flip-card__reset ${action === 'forgot' ? 'active' : ''}`}>
              <h2 className='h2'>Reset Password</h2>
              <form>
                <input
                  className="flip-card__input"
                  type="email"
                  placeholder="Email"
                  required
                />
                <button className="flip-card__btn" type="submit">Send OTP</button>
                <p><Link to="/login" onClick={loginlink}>Go to Login Page</Link></p>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Login;
