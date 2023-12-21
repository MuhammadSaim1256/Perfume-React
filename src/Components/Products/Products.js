import React, { useContext } from "react";
import ProductItem from "./ProductItem/ProductItem";
import productContext from "../../ProductContext/ProdductContext";
import Container from "../Container/Container";
import PREV from "../../Assests/Group 184.png";
import NEXT from "../../Assests/Group 185.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const Products = () => {
  const recieveContext = useContext(productContext);
  const { product } = recieveContext;

  return (
    <section id="product">
      <h1>Trending Product’s</h1>
      <div className="slider-width">
        <Container>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {product.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductItem
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev">
            <img src={PREV} alt="" />
          </div>
          <div className="swiper-button-next">
            <img src={NEXT} alt="" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Products;
