import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Assests/Logo.png";
import Search from "../../Assests/Search.png";
import Cart from "../../Assests/Bag.png";
import Container from "../Container/Container";
import "./style.css";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  const [login, setLogin] = useState(false);
  const user = {
    id: "dhfjdfhdfj",
    role: "user",
    name: "John",
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
            {user ? (
              // Show login icon if user is logged in
              <div className="login">
                {user.id === "" ? (
                  <Link to="/login">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                ) : (
                  <div onClick={() => setLogin(!login)}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                )}
              </div>
            ) : (
              // Redirect user to login page if not logged in
              <div className="login">
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div>
            )}
            <div className="cart">
              <span>0</span>
              <Link to="/">
                <img src={Cart} alt="" />
              </Link>
            </div>
          </div>
          {login ? (
            <div className={`login-popup hidden`}>
              <div className="login-popup-content">
                <Link to="/profile" onClick={() => setLogin(!login)}>
                  Profile
                </Link>
                {user.role === "admin" && <Link to="/admin">Dashboard</Link>}
                <button onClick={() => console.log("Logout")}>Logout</button>
              </div>
            </div>
          ) : (
            <div className={`login-popup`}>
              <div className="login-popup-content">
                <Link to="/profile" onClick={() => setLogin(!login)}>
                  Profile
                </Link>
                {user.role === "admin" && <Link to="/admin">Dashboard</Link>}
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
