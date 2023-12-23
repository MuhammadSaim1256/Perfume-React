import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../ProductContext/ProdductContext";
import Container from "../../Container/Container";
import Products from "../Products";
import "./style.css";

const ProductDetail = () => {
  const dataContext = useContext(ProductContext);
  const { product } = dataContext;

  const { id } = useParams(); // Get the id parameter from the URL

  const selectedProduct = product.find((item) => item.id === parseInt(id)); // Find the selected product

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const { title, img, desc, price } = selectedProduct;

  return (
    <>
      <Container>
        <div id="product-detail">
          <h1>Shop All Our Best Seller</h1>
          <div className="product-detail">
            <div className="product-detail-img">
              <img src={img} alt="" />
            </div>
            <div className="">
              <h1>{title}</h1>
              <p>{desc}</p>
              <h2>{price}</h2>
            </div>
          </div>
        </div>
      </Container>
      <Products />
    </>
  );
};

export default ProductDetail;
