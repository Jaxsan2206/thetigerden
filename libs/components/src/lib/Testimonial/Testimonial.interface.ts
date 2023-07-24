import { IImageProps } from "../../types/common";

export interface ITestimonialProps {
    userImage?: IImageProps;
    username?: string;
    // TODO: use date type
    date?: string;
    message?: string;
  }