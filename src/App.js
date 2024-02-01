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
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import BlogDetail from "./Components/Blog/Blog Detail/BlogDetail";

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
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </ProductProvider>
    </>
  );
};

export default App;
