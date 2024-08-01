import React, { useState } from 'react';
import './Forgot.css';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Password reset email sent! Check your inbox.');
      setTimeout(() => {
        navigate('/reset-password');  // Navigate to reset password page after successful email
      }, 2000);  // Wait for 2 seconds before navigating
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    }
  };

  return (
    <div className="div-wrapper">
      <div className="card-switch">
        <div className="card__front">
          <form className="flip-card__form" onSubmit={handlePasswordReset}>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
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
      </div>
    </div>
  );
};

export default Forgot;
