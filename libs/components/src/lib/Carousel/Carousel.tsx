import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselBox, CarouselContainer, CarouselTitle } from "./Carousel.style";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.98,
  slidesToScroll: 1,
  autoplay: true,
  className: "slider",
  autoplaySpeed: 2000,
  pauseOnFocus: true,
  variableWidth: false, 
  responsive: [{
    breakpoint: 500,
    settings: {
        slidesToShow: 1
    }
  }],
  nextArrow: (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    stroke={"black"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
),
prevArrow: (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={90}
  height={90}
  viewBox="0 0 24 24"
  fill="none"
  stroke={"black"}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M15 18l-6-6 6-6" />
</svg>
)
};

const Carousel: React.FC<React.PropsWithChildren<any>> = ({ children, title }) => {
  return (
    <CarouselBox>
        <CarouselContainer>
        <CarouselTitle>{title}</CarouselTitle>
        <Slider {...settings}>{children}</Slider>
        </CarouselContainer>
    </CarouselBox>
  );
};

export default Carousel;
