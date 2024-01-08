import React, { useContext } from "react";
import ProductItem from "./ProductItem/ProductItem";
import { ProductContext } from "../../ProductContext/ProdductContext";
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
  const recieveContext = useContext(ProductContext);
  const { product } = recieveContext;

  return (
    <section id="product">
      <h1>Trending Product’s</h1>
      <div className="slider-width">
        <Container>
          <Swiper
            slidesPerView={4}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              737: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1530: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
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
