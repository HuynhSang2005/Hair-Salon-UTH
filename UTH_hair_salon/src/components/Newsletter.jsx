import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Subscribe to the U tê hắc salon r</h2>
        <p>Bla bla bla</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Subscribe</button>
        </form>
        <div className="social-icons">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
