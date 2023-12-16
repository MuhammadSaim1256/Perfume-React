import React, { useContext } from "react";
import productContext from "../../ProductContext/ProdductContext";
import ProductItem from "../../Components/Products/ProductItem/ProductItem";

const Shop = () => {
  const prodductContext = useContext(productContext);

  const { product } = prodductContext;
  return (
    <>
      <h1 className="shop-h1">Shop All Our Best Seller</h1>
      <div className="product-grid">
        {product.map((item, index) => (
          <ProductItem
            key={index}
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
