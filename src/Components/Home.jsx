import React from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../assets/code.jpg'; // Add an image to your project

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <img src={heroImage} alt="Recovery Journey" className="hero-image" />
        <h1 className="hero-title">Welcome to DeMentor</h1>
        <p className="hero-subtitle">Your Path to Recovery and Wellness</p>
        <Link to="/login" className="hero-button">Get Started</Link>
      </header>

      <section className="features-section">
        <div className="feature">
          <h2>Personalized Support</h2>
          <p>Receive customized advice and support tailored to your specific needs. Our tools and resources are designed to guide you through the recovery process.</p>
        </div>
        <div className="feature">
          <h2>Community and Support</h2>
          <p>Join a supportive community of individuals who understand your journey. Share experiences, seek advice, and find encouragement from others on the same path.</p>
        </div>
        <div className="feature">
          <h2>Expert Guidance</h2>
          <p>Access expert advice from professionals in addiction recovery. Benefit from their knowledge and experience to help you overcome challenges and achieve your goals.</p>
        </div>
      </section>

      <section className="about-section">
        <h2>About DeMentor</h2>
        <p>DeMentor is dedicated to providing effective tools and support for individuals struggling with addiction. Our mission is to empower you with the resources and community you need to make a positive change in your life.</p>
        <p>We offer a range of services, including personalized plans, expert guidance, and a supportive community, to help you on your path to recovery.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 DeMentor. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/contact" className="footer-link">Contact Us</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
