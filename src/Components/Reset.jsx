import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { confirmPasswordReset } from 'firebase/auth';
import { auth } from '../firebase';
import './Reset.css'; // You can style this page with your own CSS

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const oobCode = query.get('oobCode'); // This is the code from the reset link

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage('Password has been reset successfully.');
    } catch (err) {
      setError('Failed to reset password. The link might be expired or invalid.');
    }
  };

  return (
    <div className="reset-wrapper">
      <h1>Reset Password</h1>
      {error && <p className="error">{error}</p>}
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
