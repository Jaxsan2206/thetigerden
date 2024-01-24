import React from "react";
import Carousel, { ICarouselProps } from "../../Carousel/Carousel";
import Testimonial from "../Testimonial";
import { ITestimonialProps } from "../Testimonial.interface";

const TestimonialCarousel: React.FC<ICarouselProps & { testimonials: ITestimonialProps[] }> = ({ title, testimonials }) => {
  return (
    <Carousel title={title} slideSize={[1, 2, 3]}>
      {testimonials.map((testimonial: ITestimonialProps) => (
        <Testimonial {...testimonial} />
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
