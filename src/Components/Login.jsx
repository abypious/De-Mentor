import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Login.css';
import{auth} from '../firebase'
import{ createUserWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
  const [action, setAction] = useState('');
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      createUserWithEmailAndPassword(auth, email, password)
      console.org("Account created succesfully")
    } catch(err) {
      console.log(err)
    }
  }

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
    <div>
      <h1 className='heading'>De-Mentor</h1>
      <div className={`wrapper ${action}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form className='signin-page' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email id' required />
            </div>
            <div className="input-box">
              <input type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <label onClick={handleshow}>Show</label>
            </div>
            <button type='submit'>Login</button>
            <div className="forgot">
              <a href="#" onClick={resetlink}>Forgot Password</a>
            </div>
            <div className="register">
              <p>Don&apos;t have an account? <a href="#" onClick={register}>Sign in</a></p>
            </div>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="form-box signin">
          <form>
            <h1>Sign in</h1>
            <div className="input-box">
              <input type="text" placeholder='Email id' required />
            </div>
            <div className="input-box">
              <input type={show ? "text" : "password"} placeholder='Password' required />
              <label onClick={handleshow}>Show</label>
            </div>
            <div className="input-box">
              <input type={show ? "text" : "password"} placeholder='Confirm Password' required />
              <label onClick={handleshow}>Show</label>
            </div>
            <button type='submit'>Sign In</button>
            <div className="register">
              <p>Already have an account? <Link to="/login" onClick={loginlink}>Log In</Link></p>
            </div>
          </form>
        </div>

        {/* Reset Password Form */}
        <div className="form-box reset">
          <form>
            <h2 className='h2'>Reset Password</h2>
            <div className="input-box">
              <input type="text" placeholder='Email id' required />
            </div>
            <button type='submit'>Send OTP</button>
            <p><Link to="/login" onClick={loginlink}>Go to Login Page</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
