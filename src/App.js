import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import productContext from "./ProductContext/ProdductContext";
import First from "./Components/Products/image 485 2.png";
import Second from "./Components/Products/image 493.png";
import Third from "./Components/Products/best-luxury-fragrances-300484-1655236743384-main 3.png";
import Fourth from "./Components/Products/image 402.png";
import Five from "./Components/Products/Group 119.png";
import Six from "./Components/Products/image 404.png";
import Seven from "./Components/Products/image 470.png";
import Eight from "./Components/Products/image 472.png";
import Nine from "./Components/Products/image 471.png";
import Ten from "./Components/Products/image 425.png";
import Eleven from "./Components/Products/image 429.png";
import Twelve from "./Components/Products/Ck 1.png";
import Thirteen from "./Components/Products/image 473 2.png";
import Fourteen from "./Components/Products/CK-BE-MEN-EDT-200ML 4.png";
import Fifteen from "./Components/Products/ck2 1.png";
import Sixteen from "./Components/Products/717kCyka+fL 3.png";
import ProductDetail from "./Components/Products/ProductDetail/ProductDetail";
import "./App.css";

const App = () => {
  const productData = {
    product: [
      {
        id: 1,
        img: First,
        title: "J. Dark NIGHT",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 2,
        img: Second,
        title: "J. JANAN GOLD EDITION",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 3,
        img: Third,
        title: "DIOR BLACK OPIUM",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 4,
        img: Fourth,
        title: "J. Alexander",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 5,
        img: Five,
        title: "COLOR ME WHITE EDDITON",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 6,
        img: Six,
        title: "YSL LIBRE",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 7,
        img: Seven,
        title: "COLOR ME BLACK EDDITION",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 8,
        img: Eight,
        title: "BLOSSOM POUR FEMME",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 9,
        img: Nine,
        title: "J. EXCLUSIVE",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 10,
        img: Ten,
        title: "J, ESSENCE FOR MEN",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: "ESCENTRIC FOR WOMEN",
        img: Eleven,
        title: "ESCENTRIC FOR WOMEN",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: "CK IN2U",
        img: Twelve,
        title: "CK IN2U",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: "CK ONE GOLD",
        img: Thirteen,
        title: "CK ONE GOLD",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: "CK BE EAU DE TOILETTE",
        img: Fourteen,
        title: "CK BE EAU DE TOILETTE",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: "CK ONE PLATINUM EDDITION",
        img: Fifteen,
        title: "CK ONE PLATINUM EDDITION",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: "CK FREE FOR MEN",
        img: Sixteen,
        title: "CK FREE FOR MEN",
        price: 14.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
    ],
  };

  return (
    <>
      <productContext.Provider value={productData}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </productContext.Provider>
    </>
  );
};

export default App;
