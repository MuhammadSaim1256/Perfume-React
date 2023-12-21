import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Logo-Footer.png";
import Facebook from "../../Assests/facebook-svgrepo-com (1) 1.svg";
import Twitter from "../../Assests/twitter-round-svgrepo-com 1.svg";
import Youtube from "../../Assests/youtube-round-svgrepo-com 2.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div style={{ width: "100%" }}>
          <div className="footer">
            <div className="logo-content">
              <div className="foot-logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <h3>Follow Us</h3>
              <div className="social">
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" className="twiter" />
                <img src={Youtube} alt="" />
              </div>
            </div>
            <ul>
              <h4>Company</h4>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/shop">Branding</Link>
              </li>
              <li>
                <Link to="/shop">Newsroom</Link>
              </li>
            </ul>
            <ul>
              <h4>Resources</h4>
              <li>
                <Link to="/shop">Collage</Link>
              </li>
              <li>
                <Link to="/contact">Support</Link>
              </li>
              <li>
                <Link to="/contact">Safety</Link>
              </li>
              <li>
                <Link to="/shop">Stream kit</Link>
              </li>
            </ul>
            <ul>
              <h4>Terms & Condition</h4>
              <li>
                <Link to="/about">Policy</Link>
              </li>
              <li>
                <Link to="/about">Faq</Link>
              </li>
              <li>
                <Link to="/contact">Return & Delivery</Link>
              </li>
              <li>
                <Link to="/cart">Tracking</Link>
              </li>
            </ul>
            <ul>
              <h4>Categories</h4>
              <li>
                <Link to="/shop">Men’s</Link>
              </li>
              <li>
                <Link to="/shop">Women’s</Link>
              </li>
              <li>
                <Link to="/shop">Gift Sets</Link>
              </li>
              <li>
                <Link to="/shop">Deodorant's</Link>
              </li>
            </ul>
            <ul className="news-letter">
              <h4>Subscribe</h4>
              <p>Get 10% off your first order</p>
              <div className="news-email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <button type="submit">Submit</button>
              </div>
            </ul>
          </div>
          <p className="copy-right">
            Copyright © 2023 PERFUME . All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
