import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Google from "../../Assests/Googe.png";
import Facebook from "../../Assests/Facbook.png";
import "./style.css";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div id="login">
      <div className="login-content">
        <h1>Login</h1>
        <div className="inputs">
          <div className="email">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="password">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
            />
            <FontAwesomeIcon
              icon={passwordShown ? faEye : faEyeSlash}
              onClick={togglePassword}
            />
          </div>
        </div>
        <div className="submit">
          <button>
            <span>Login</span>
          </button>
        </div>
        <div className="forget">
          <Link to="/forget-password">Forgot Password?</Link>
        </div>
        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <div className="google">
          <img src={Google} alt="" />
          <p>Continue with Google</p>
        </div>
        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <div className="facebook">
          <img src={Facebook} alt="" />
          <p>Continue with Facebook</p>
        </div>
        <div className="hr">
          {" "}
          <hr />
        </div>
        <div className="login-sign-up">
          <p>
            Don't have an Account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
