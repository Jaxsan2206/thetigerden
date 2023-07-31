import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "../Layout/Layout";
import { TestimonialBox, TestimonialContainer } from "./Carousel.style";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: true,
  variableWidth: false, 
  responsive: [{
    breakpoint: 500,
    settings: {
        slidesToShow: 1
    }
  }]
};

const Carousel: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <TestimonialBox>
        <TestimonialContainer>
        <Slider {...settings}>{children}</Slider>
        </TestimonialContainer>
    </TestimonialBox>
  );
};

export default Carousel;
