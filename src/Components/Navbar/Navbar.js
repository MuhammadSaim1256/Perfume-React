import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Assests/Logo.png";
import Search from "../../Assests/Search.png";
import Login from "../../Assests/Login.png";
import Cart from "../../Assests/Bag.png";
import Container from "../Container/Container";
import "./style.css";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  const [login, setLogin] = useState(false);
  const user = {
    id: "sakjskajs",
    role: "Admin",
    name: "John Doe",
  };

  return (
    <header>
      <Container>
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <FontAwesomeIcon icon={faBars} id="bar" />
            <FontAwesomeIcon icon={faXmark} id="close" />
          </label>

          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <ul>
            <li id="active">
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={location.pathname === "/shop" ? "active" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="icons">
            <div className="search">
              <Link to="/">
                <img src={Search} alt="" />
              </Link>
            </div>
            <div className="login" onClick={() => setLogin(!login)}>
              <Link to="/">
                <img src={Login} alt="" />
              </Link>
            </div>
            <div className="cart">
              <span>0</span>
              <Link to="/">
                <img src={Cart} alt="" />
              </Link>
            </div>
          </div>
          {login && (
            <div className="login-popup">
              <div className="login-popup-content">
                <Link to="/profile">Profile</Link>
                {user.role === "Admin" ? (
                  <Link to="/admin">Dashboard</Link>
                ) : (
                  ""
                )}
                <button onClick={() => console.log("Logout")}>Logout</button>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
