import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = [
  "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
  "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?cs=srgb&dl=pexels-xmtnguyen-699953.jpg&fm=jpg",
  "https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg",
  "https://www.southernliving.com/thmb/j3ZCgWAtinktLbdekgFObMVLNuA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-2-662c61849334498ea1f71cf7c49af2da.jpg",
];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      centerMode
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
          <div
            key={index}
            style={{ maxHeight: "38rem" }}
            className="object-center brightness-50"
          >
            <img src={image} alt="pizza" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
