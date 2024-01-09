import React from "react";
import Main from "../../Assests/main.png";
import Container from "../Container/Container";
import Leaf1 from "../../Assests/Leaf1.png";
import Leaf2 from "../../Assests/Leaf2.png";
import "./style.css";

const Choose = () => {
  return (
    <div id="choose">
      <div className="leaf-one">
        <img src={Leaf1} alt="" />
      </div>
      <h1>Why You Choose Us ?</h1>
      <Container>
        <div className="choose">
          <div className="choose-text">
            <div>
              <h3>Helpful guides and tips</h3>
              <p>
                {" "}
                We provide useful tips and guides to help you choose and apply
                your fragrance correctly, and make it last all day.
              </p>
            </div>
          </div>
          <div className="choose-text-two">
            <div>
              <h3>Personalized recommendations</h3>
              <p>
                {" "}
                Our team of fragrance experts is always on hand to help you find
                the perfect scent based on your preferences, personality, and
                lifestyle.
              </p>
            </div>
          </div>

          {/* Second */}
          <div className="choose-text-three">
            <div>
              <h3>Wide range of options</h3>
              <p>
                {" "}
                We offer an extensive range of scents, from classic to
                contemporary, so you can find a fragrance that truly speaks to
                you.
              </p>
            </div>
          </div>
          <div className="choose-text-four">
            <div>
              <h3>Top-quality products</h3>
              <p>
                {" "}
                We only offer high-end perfumes, colognes, and eau de toilettes
                from some of the most prestigious brands in the world, ensuring
                that you get the best quality fragrance.
              </p>
            </div>
          </div>
          <div className="choose-png">
            <img src={Main} alt="" />
          </div>
        </div>
      </Container>
      <div className="leaf-two">
        <img src={Leaf2} alt="" />
      </div>
    </div>
  );
};

export default Choose;
