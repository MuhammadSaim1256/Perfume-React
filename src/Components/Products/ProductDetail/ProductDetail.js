import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../ProductContext/ProdductContext";
import Container from "../../Container/Container";
import Products from "../Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../../Assests/Bag.png";
import "./style.css";

const ProductDetail = () => {
  const dataContext = useContext(ProductContext);
  const { product } = dataContext;

  const { id } = useParams();
  const selectedProduct = product.find((item) => item.id === id);

  const [count, setCount] = useState(0);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const {
    title,
    img,
    desc,
    price,
    stock,
    reviews,
    reviewsQuantity,
    size,
    category,
    cutPrice,
  } = selectedProduct;

  if (reviewsQuantity > 0) {
    var stars = Array(reviewsQuantity)
      .fill()
      .map((_, index) => <FontAwesomeIcon key={index} icon={faStar} />);
  }

  return (
    <div id="product-detail">
      <Container>
        <div className="product-detail">
          <h1>Shop All Our Best Seller</h1>
          <div className="product-detail-content">
            <div className="product-detail-img">
              <img src={img} alt="" />
            </div>
            <div className="product-detail-text">
              <h1>{title}</h1>
              <div className="stock">
                {stock < 1 ? (
                  <h5>"Out of Stock"</h5>
                ) : (
                  <h5>In Stock: {stock}</h5>
                )}
              </div>
              <div className="reviews">
                {stars && (
                  <h5>
                    {stars} {reviewsQuantity} Reviews
                  </h5>
                )}
              </div>
              <div className="price">
                <h4>${price}</h4>
                <h4 className="cut-price">${cutPrice}</h4>
              </div>
              <hr />
              <div className="detail">
                <h3>Details</h3>
                <p>{desc}</p>
              </div>
              <hr />
              <div className="size">
                <h5>Size: {size}</h5>
                <h5>Category: {category}</h5>
              </div>
              <hr />
              <div className="review">
                <h3>Reviews</h3>
              </div>
              <hr />
              <div className="quantity">
                <h4>Quantity</h4>
                <div className="count">
                  <button
                    onClick={() => setCount(count - 1)}
                    disabled={count <= 1}
                  >
                    -
                  </button>
                  <h5>{count}</h5>
                  <button
                    onClick={() => setCount(count + 1)}
                    disabled={count >= stock}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="btns">
                <button className="buy">
                  <span>Buy Now</span>
                </button>
                <div className="cart-btn">
                  <span>
                    <img src={Cart} alt="" />
                    <h5> Add to Cart</h5>
                    <h4>{price}</h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Products />
    </div>
  );
};

export default ProductDetail;
