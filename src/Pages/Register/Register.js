import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
  const [cpasswordShown, setCPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <div id="sign-up">
        <div className="login-content">
          <h1>Create Account</h1>
          <div className="inputs">
            <div className="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="password">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter a Password"
              />
              <FontAwesomeIcon
                icon={passwordShown ? faEye : faEyeSlash}
                onClick={togglePassword}
              />
            </div>
            <div className="c-password password">
              <input
                type={cpasswordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Confirm Password"
              />
              <FontAwesomeIcon
                icon={cpasswordShown ? faEye : faEyeSlash}
                onClick={() => setCPasswordShown(!cpasswordShown)}
              />
            </div>
          </div>
          <div className="submit">
            <button>
              <span>Create</span>
            </button>
          </div>
          <div className="or">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <div className="login-sign-up">
            <p>
              Already have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
