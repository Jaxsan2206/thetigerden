import React from "react";
import {
  CardContainer,
  MessageContainer,
  UserContainer,
  UserIcon,
  UserInformation,
} from "./Testimonial.style";
import Image from "../Image/Image";
import { Text } from "../Typography/Typography";
import { ITestimonialProps } from "./Testimonial.interface";
import { IImageProps } from "../../types/common";

const Testimonial: React.FC<React.PropsWithChildren<ITestimonialProps>> = ({
  userImage,
  username,
  date,
  message,
  ...rest
}) => {
  console.log(rest)
  return (
    <CardContainer>
      <UserContainer>
        <UserIcon>
          <Image {...userImage as IImageProps} />
        </UserIcon>
        <UserInformation>
          <Text>{username}</Text> 
          <Text>{date}</Text>
        </UserInformation>
      </UserContainer>

      <MessageContainer>
        {/* <Text>{quotationMark}</Text> */}
        <Text>{message}</Text>
      </MessageContainer>
    </CardContainer>
  );
};

export default Testimonial;
