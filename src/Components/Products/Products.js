import React, { useContext } from "react";
import ProductItem from "./ProductItem/ProductItem";
import productContext from "../../ProductContext/ProdductContext";
import "./style.css";

const Products = () => {
  const recieveContext = useContext(productContext);

  const { product } = recieveContext;

  console.log(product);
  return (
    <section id="product">
      <h1>Trending Product’s</h1>
      <div className="product-grid">
        {product.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
