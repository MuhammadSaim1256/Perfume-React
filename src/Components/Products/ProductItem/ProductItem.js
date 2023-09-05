import React from "react";
import { Link } from "react-router-dom";
import Star from "./Stars.png";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const ProductItem = ({ id, img, title, price }) => {
  return (
    <div className="swiper-slide">
      <div className="slide-content">
        <div className="img">
          <Link to={`/shop/${id}`}>
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="slide-text">
          <h2>{title}</h2>
          <hr />
          <div className="rev">
            <img src={Star} alt="" />
            <h4>05 reviews</h4>
          </div>
          <button className="btn">
            <Link to="/shop">
              <FontAwesomeIcon icon={faBagShopping} />
              <h4>Add to cart</h4>
              <h5>{price}</h5>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
