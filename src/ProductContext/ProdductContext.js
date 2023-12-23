import React, { createContext } from "react";
import First from "../Assests/image 485 2.png";
import Second from "../Assests/image 493.png";
import Third from "../Assests/best-luxury-fragrances-300484-1655236743384-main 3.png";
import Fourth from "../Assests/image 402.png";
import Five from "../Assests/Group 119.png";
import Six from "../Assests/image 404.png";
import Seven from "../Assests/image 470.png";
import Eight from "../Assests/image 472.png";
import Nine from "../Assests/image 471.png";
import Ten from "../Assests/image 425.png";
import Eleven from "../Assests/image 429.png";
import Twelve from "../Assests/Ck 1.png";
import Thirteen from "../Assests/image 473 2.png";
import Fourteen from "../Assests/CK-BE-MEN-EDT-200ML 4.png";
import Fifteen from "../Assests/ck2 1.png";
import Sixteen from "../Assests/717kCyka+fL 3.png";
import testimonialOne from "../Assests/Testimonials 1.png";
import testimonialTwo from "../Assests/Testimonials 2.png";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const productData = {
    product: [
      {
        id: 1,
        img: First,
        title: "J. Dark NIGHT",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 2,
        img: Second,
        title: "J. JANAN GOLD EDITION",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 3,
        img: Third,
        title: "DIOR BLACK OPIUM",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 4,
        img: Fourth,
        title: "J. Alexander",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 5,
        img: Five,
        title: "COLOR ME WHITE EDDITON",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 6,
        img: Six,
        title: "YSL LIBRE",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 7,
        img: Seven,
        title: "COLOR ME BLACK EDDITION",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 8,
        img: Eight,
        title: "BLOSSOM POUR FEMME",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 9,
        img: Nine,
        title: "J. EXCLUSIVE",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: 10,
        img: Ten,
        title: "J, ESSENCE FOR MEN",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: "ESCENTRIC FOR WOMEN",
        img: Eleven,
        title: "ESCENTRIC FOR WOMEN",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: "CK IN2U",
        img: Twelve,
        title: "CK IN2U",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: "CK ONE GOLD",
        img: Thirteen,
        title: "CK ONE GOLD",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: "CK BE EAU DE TOILETTE",
        img: Fourteen,
        title: "CK BE EAU DE TOILETTE",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: "CK ONE PLATINUM EDDITION",
        img: Fifteen,
        title: "CK ONE PLATINUM EDDITION",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
      {
        id: "CK FREE FOR MEN",
        img: Sixteen,
        title: "CK FREE FOR MEN",
        price: 14.99,
        desc: [
          "What it isAn essential men's fragrance that combines light, depth, and sensuality. An astounding delight of freshness and energy brightens the creation by the power of citrus and lavender while noble woods and aromatic notes comprising patchouli, vetiver, sage, and basil deliver texture and depth that take the senses by surprise. Finally amber, musk, and sandalwood procure an exceptional trail with the great intensity and sensual characteristics of Dark Night.",
          "Application tipsTo prolong this fragrance, Spray Dark Night by j.fragrances onto pulse points (on wrists, behind ears and on the neck).",
        ],
      },
    ],
    testimonials: [
      {
        id: 1,
        img: testimonialOne,
        name: "Sarah",
        city: "New York, NY",
        desc: "I absolutely love the fragrance collection at this website! The scents are unique and high-quality, and I always receive compliments whenever I wear them. The team was extremely helpful in guiding me through the selection process and providing personalized recommendations.",
      },
      {
        id: 2,
        img: testimonialTwo,
        name: "John",
        city: "Los Angeles, CA",
        desc: "I absolutely love the fragrance collection at this website! The scents are unique and high-quality, and I always receive compliments whenever I wear them. The team was extremely helpful in guiding me through the selection process and providing personalized recommendations.",
      },
      {
        id: 3,
        img: testimonialOne,
        name: "Sarah",
        city: "New York, NY",
        desc: "I absolutely love the fragrance collection at this website! The scents are unique and high-quality, and I always receive compliments whenever I wear them. The team was extremely helpful in guiding me through the selection process and providing personalized recommendations.",
      },
      {
        id: 4,
        img: testimonialTwo,
        name: "John",
        city: "Los Angeles, CA",
        desc: "I absolutely love the fragrance collection at this website! The scents are unique and high-quality, and I always receive compliments whenever I wear them. The team was extremely helpful in guiding me through the selection process and providing personalized recommendations.",
      },
    ],
  };

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
