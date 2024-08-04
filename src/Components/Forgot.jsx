import React, { useState } from 'react';
import './csss/Forgot.css';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Check your inbox.');
      setTimeout(() => {
        navigate('/login');  
      }, 2000);  
    } catch (err) {
      console.error('Error sending password reset email:', err); 
      toast.error('Failed to send reset email. Please try again.');
    }
  };

  return (
    <div className="div-wrapper">
     
        <div className="card__front">
          <form className="flip-card__form" onSubmit={handlePasswordReset}>
            <span className='card-heading'>Reset Password</span>
            <input
              className="card__input"
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="card__btn" type="submit">Send Link</button>
          </form>
        </div>
      
      <ToastContainer />
    </div>
  );
};

export default Forgot;
