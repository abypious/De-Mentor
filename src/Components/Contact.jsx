import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [action, setAction] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert("Form submitted");
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact</h2>
          <p><i className="fas fa-map-marker-alt"></i> Location: Meenangadi, Kerala, India</p>
          <p><i className="fas fa-envelope"></i> Email: aby.pious.in@gmail.com</p>
          <p><i className="fas fa-phone"></i> Call: +91 7356495708</p>
          <p><i className="fas fa-home"></i> Address: Parakkudi, Choothupara, Manikave, 673596</p>
          <p><i className="fas fa-comment"></i> Message: 7356495708</p>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form action="https://formsubmit.co/dementor.help@gmail.com" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
