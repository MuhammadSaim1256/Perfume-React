import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext/ProdductContext";
import ProductItem from "../../Components/Products/ProductItem/ProductItem";

const Shop = () => {
  const prodductContext = useContext(ProductContext);

  const { product } = prodductContext;
  return (
    <div className="shop">
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
    </div>
  );
};

export default Shop;
