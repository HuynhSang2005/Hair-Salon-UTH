import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <h2>Get in touch</h2>
        <p>Điền vào đi</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone" required />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Service of your interest"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="A message for Haus Salon"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
