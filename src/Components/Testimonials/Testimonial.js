import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PREV from "../../Assests/Group 196.png";
import NEXT from "../../Assests/Group 230.png";
import Container from "../Container/Container";
import { ProductContext } from "../../ProductContext/ProdductContext";
import "./style.css";

const Testimonial = () => {
  const testiContext = useContext(ProductContext);
  const product = testiContext.testimonials;
  return (
    <div id="testimonial">
      <h1>Testimonial’s</h1>
      <div className="slider-width">
        <Container>
          <Swiper
            slidesPerView={2}
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
              <SwiperSlide className="testimonial-slide" key={index}>
                <div className="testimonail">
                  <div className="img-name">
                    <img src={item.img} alt="" />
                    <div>
                      <h3>-{item.name}</h3>
                      <h3>{item.city}</h3>
                    </div>
                  </div>
                  <p>"{item.desc}"</p>
                </div>
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
    </div>
  );
};

export default Testimonial;
