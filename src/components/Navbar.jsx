import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <a href="/">e-shopping</a>
            </div>
            <ul className="navbar-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="navbar-actions">
              <div className="search-bar">
                <input type="text" placeholder="Search products..." />
                <button type="submit">Search</button>
              </div>
              <div className="cart-icon">
                <a href="/cart">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/833/833314.png" 
                    alt="Cart" 
                    className="cart-img"
                  />
                  <span className="cart-count">0</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
    };    

export default Navbar
