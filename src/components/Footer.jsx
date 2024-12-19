import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>About Us</h4>
              <p>
                We are a leading e-shopping platform offering a wide range of products at unbeatable prices.
              </p>
            </div>
    
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
    
            <div className="footer-section">
              <h4>Follow Us</h4>
              <ul className="social-links">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
    
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
    
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} e-shopping. All rights reserved.</p>
          </div>
        </footer>
      );
    };
    
    export default Footer;
