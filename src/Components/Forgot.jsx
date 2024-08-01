import React, { useState } from 'react';
import './Forgot.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const Forgot = () => {
  const [action, setAction] = useState(''); 
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [error, setError] = useState(''); // State for error messages
  // const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
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
    <div className="div-wrapper">
      <div className="card-switch">
         <label className="switch"> 
           <input type="checkbox" className="toggle" /> 
           {/* <span className="slider"></span>
           <span className="card-side"></span>
           </label>className="flip-card__inner> */}
           <div>
            <div className={`card__front ${action === '' ? 'active' : ''}`}>
              <form className="flip-card__form" onSubmit={handleSignin}>
                {error && <p className="error">{error}</p>}
                <span className='card-heading'>Reset Password</span>
                <input
                  className="card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type={show ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /> */}
                <button className="card__btn" type="submit">Get OTP</button>
                {/* <div className="forgot"> */}
                {/* onClick={handleForgotPasswordNavigation} */}
                {/* <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <button type="button" className="flip-card__btn google-signin" onClick={handleGoogleSignIn}>
                 Google Sign in
                </button>*/}
              </form> 
              <div className='otp-box'>
                <form action="">
                    <input type="number" />
                    <input type="number" disabled/>
                    <input type="number" disabled/>
                    <input type="number" disabled/>
                    <button className='card__btn' type="button">Confirm</button>
                    
                </form>
                
            </div>
            </div>

            


           

            
          </div>
        </label>
      </div>
    </div>
  );
};

export default Forgot;
