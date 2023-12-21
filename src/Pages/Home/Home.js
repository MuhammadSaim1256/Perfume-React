import React from "react";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Products/Products";
import About from "../../Components/AboutH/About";
import Choose from "../../Components/Choose/Choose";
import Testimonial from "../../Components/Testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Product />
      <About />
      <Choose />
      <Testimonial />
    </>
  );
};

export default Home;
