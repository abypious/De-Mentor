import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithNameEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [action, setAction] = useState(''); 
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate();


  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithNameEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate('/Navbarlogin');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match ! ! ');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, name, email, password);
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

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google sign-in successful");
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
    }
  };

  // const handleForgotPasswordNavigation = () => {
  //   navigate('/forgot-password');
  // };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
          
            <div className={`flip-card__front ${action === '' ? 'active' : ''}`}>
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
                <button className="flip-card__btn" type="submit">Let&apos;s go!</button>
                <div className="forgot">
                {/* onClick={handleForgotPasswordNavigation} */}
                <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <button type="button" className="flip-card__btn google-signin" onClick={handleGoogleSignIn}>
                 Google Sign in
                </button>
              </form>
            </div>

            <div className={`flip-card__back ${action === 'active' ? 'active' : ''}`}>     
              <form className="flip-card__form" onSubmit={handleSignup}>
                {error && <p className="error">{error}</p>}
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
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
                <button className="flip-card__btn" type="submit">Confirm!</button>
              </form>
            </div>

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
