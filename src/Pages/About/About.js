import React from "react";
import Container from "../../Components/Container/Container";
import aboutImg from "../../Assests/Mask group copy.png";
import "./style.css";
import Testimonial from "../../Components/Testimonials/Testimonial";

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <div className="about-title">
            <h1>About Us</h1>
          </div>
        </Container>
      </section>
      <Container>
        <div className="about">
          <div className="about-content">
            <div className="about-text">
              <h1>About Us</h1>
              <p>
                Welcome to our Fragrance Website, where we believe that scents
                are more than just a way to smell good – they're a way to
                express yourself, evoke emotions, and create lasting memories.
                At our Fragrance Website, we're passionate about all things
                fragrance. We believe that a scent can transport you to another
                time and place, evoke feelings of joy or nostalgia, or simply
                make you feel confident and empowered. That's why we offer a
                wide range of high-quality fragrances for men and women, from
                classic favorites to new and exciting blends. Our team is made
                up of fragrance experts who are always on the lookout for the
                latest trends and innovative new scents. We're dedicated to
                providing our customers with the best possible shopping
                experience, from our user-friendly website to our knowledgeable
                customer service team.
              </p>
            </div>
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <Testimonial />
    </>
  );
};

export default About;
