import React, { useContext } from "react";
import Products from "../../Components/Products/Products";
import productContext from "../../ProductContext/ProdductContext";
import Container from "../../Components/Container/Container";
import ProductItem from "../../Components/Products/ProductItem/ProductItem";

const Shop = () => {
  const prodductContext = useContext(productContext);

  const { productOne, productTwo } = prodductContext;
  return (
    <>
      <Products />
      <div className="product-grid">
        {productOne.map((item) => (
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
      <div className="product-grid">
        {productTwo.map((item) => (
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
    </>
  );
};

export default Shop;
