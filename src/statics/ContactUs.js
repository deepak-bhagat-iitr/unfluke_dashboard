import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      
      <div className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <div className='name'>
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Last Name</label>
              <input type="text" id="name" name="name" required />
            </div>


          </div>
          <div className='email_phone'>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone Number</label>
              <input type="text" id="name" name="name" required />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder='Leave a comment...' name="message" rows="5" required></textarea>
          </div>
          <p className='terms'>By submitting this form you agree to our terms and conditions and our privacy policy which explains how
            may collect, use and disclose your personal information including to third parties.</p>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
