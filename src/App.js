import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import ProductDetail from "./Components/Products/ProductDetail/ProductDetail";
import Footer from "./Components/Footer/Footer";
import { ProductProvider } from "./ProductContext/ProdductContext"; // Update this path
import "./App.css";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </Router>
      </ProductProvider>
    </>
  );
};

export default App;
