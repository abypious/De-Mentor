// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './csss/Login.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [action, setAction] = useState('');
  const [show, setShow] = useState(false); // State to toggle password visibility
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [actionCode, setActionCode] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSignin = async (e) => {
    e.preventDefault();
    if (email.length < 3) {
      toast.error('Email must be at least 3 characters long.');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      navigate('/mainpage');
    } catch (err) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully");
      setTimeout(() => {
        window.location.reload(); 
      }, 2000);
    } catch (err) {
      toast.error('Signup failed. Please try again.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success('Password reset email sent! Check your inbox.');
      setTimeout(() => {
        setAction('');
        navigate('/login');
      }, 2000);
    } catch (err) {
      toast.error('Failed to send reset email. Please try again.');
    }
  };

  const handleNewPasswordReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try {
      await confirmPasswordReset(auth, actionCode, newPassword);
      toast.success('Password reset successful');
      navigate('/login');
    } catch (err) {
      toast.error('Password reset failed. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google sign-in successful");
      navigate('/Navbarlogin');
    } catch (err) {
      toast.error('Google sign-in failed. Please try again.');
    }
  };

  useEffect(() => {
    const code = searchParams.get('oobCode');
    if (code) {
      setActionCode(code);
      setAction('reset-password');
      verifyPasswordResetCode(auth, code)
        .then(() => {
          // Code is valid
        })
        .catch(() => {
          toast.error('Invalid or expired action code. Please try again.');
          navigate('/login');
        });
    }
  }, [searchParams, navigate]);

  return (
    
    <div className="wrapper">
      
      <div className="card-switch">
      <div className="flip-card-container">
        <label className="switch">
          <input type="checkbox" className="toggle" onChange={() => setAction(action === 'active' ? '' : 'active')} />
          <span className="slider"></span>
          <span className="card-side"></span>
       
        
          <div className="flip-card__inner">
          
            <div className={`flip-card__front ${action === '' ? 'active' : ''}`}>
              <form className="flip-card__form" onSubmit={handleSignin}>
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
                <label className="show-password" onClick={() => setShow(!show)}>{show ? 'Hide Password' : 'Show Password'}</label>
                <button className="flip-card__btn" type="submit">Let&apos;s go!</button>
                <div className="forgot">
                  <Link to="/forgot-password" onClick={() => setAction('forgot')}>Forgot Password?</Link>
                </div>
                <button type="button" className="flip-card__btn google-signin" onClick={handleGoogleSignIn}>
                  Google Sign in
                </button>
              </form>
            </div>

            <div className={`flip-card__back ${action === 'active' ? 'active' : ''}`}>
              <form className="flip-card__form" onSubmit={handleSignup}>
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
                <label className="show-password" onClick={() => setShow(!show)}>{show ? 'Hide Password' : 'Show Password'}</label>
                <button className="flip-card__btn" type="submit">Confirm!</button>
              </form>
            </div>

            <div className={`flip-card__reset ${action === 'forgot' ? 'active' : ''}`}>
              <h2 className='h2'>Reset Password</h2>
              <form onSubmit={handleResetPassword}>
                <input
                  className="flip-card__input"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
                <button className="flip-card__btn" type="submit">Send OTP</button>
                <p><Link to="/login" onClick={() => setAction('')}>Go to Login Page</Link></p>
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
