import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Shop the Latest Trends</h1>
        <p>Discover exclusive deals and new arrivals every day. Don't miss out!</p>
        <div className="hero-buttons">
          <a href="/shop" className="btn-primary">Shop Now</a>
          <a href="/deals" className="btn-secondary">View Deals</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
