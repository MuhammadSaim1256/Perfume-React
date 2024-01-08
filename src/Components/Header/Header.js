import React from "react";
import HeroImage from "../../Assests/Hero-imgae.png";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Explore Our Exquisite Fragrance</h1>
        <p>
          Unleash Your Inner Confidence with Our Alluring Fragrances and Indulge
          in a World of Scented Luxury.
        </p>
        <Link to="/shop">
          <span>Shop Now</span>
        </Link>
      </div>
      <div className="hero-img">
        <img src={HeroImage} alt="" />
      </div>
    </section>
  );
};

export default Header;
