import React from "react";
import AboutImg from "../../Assests/Mask group.png";
import Container from "../Container/Container";
import "./style.css";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <section className="abouth">
      <Container>
        <div className="abouth-content">
          <div className="abouth-text">
            <h1>About Us</h1>
            <p>
              Welcome to our fragrance website, where you can explore a world of
              captivating scents and find your perfect perfume match. Our
              collection of exquisite fragrances has been carefully curated to
              offer you a wide range of options, from classic, timeless scents
              to modern, innovative blends. At our fragrance website, we believe
              that perfume is more than just a fragrance - it's a form of
              self-expression, a way to enhance your mood and leave a lasting
              impression.
            </p>
            <Link to="/about">
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </Container>
      <div className="abouth-img">
        <img src={AboutImg} alt="" />
      </div>
    </section>
  );
};

export default about;
