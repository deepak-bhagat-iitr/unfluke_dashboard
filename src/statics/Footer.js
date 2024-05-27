import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
        <h1 className="contact-us-title">VisionVow</h1>
          <p><strong>Email:</strong> vision@visionvowresearch.com</p>
          <p><strong>Phone:</strong> +91 (995) 3981-772</p>
          <p><strong>Address:</strong> C-1/63 Sanjay enclave Uttam nagar New Delhi 110059</p>
        </div>
        <p className='footer-copyright'>&copy; 2024 VisionVow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
