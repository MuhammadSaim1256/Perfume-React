import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import productContext from "../../../ProductContext/ProdductContext";

const ProductDetail = () => {
  const dataContext = useContext(productContext);
  const { product } = dataContext;

  const { id } = useParams(); // Get the id parameter from the URL

  const selectedProduct = product.find((item) => item.id === parseInt(id)); // Find the selected product

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const { title, img, desc, price } = selectedProduct;

  return (
    <div>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{desc}</p>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductDetail;
