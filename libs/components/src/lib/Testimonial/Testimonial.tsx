import React from "react";
import {
  CardContainer,
  MessageContainer,
  UserContainer,
  UserIcon,
  UserInformation,
} from "./Testimonial.style";
import { Box } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import { Text } from "../Typography/Typography";
import { ITestimonialProps } from "./Testimonial.interface";
import { IImageProps } from "../../types/common";

const image = {
  src: "https://i.etsystatic.com/20164836/r/il/bd77b8/3943923229/il_fullxfull.3943923229_ebhm.jpg",
  alt: "user profile picutre",
};

const name = "Jaxsan";
const tempDate = "24.07.2023";
const tempMessage =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const quotationMark = '"';

const Testimonial: React.FC<React.PropsWithChildren<ITestimonialProps>> = ({
  userImage,
  username,
  date,
  message,
}) => {
  return (
    <CardContainer>
      <UserContainer>
        <UserIcon>
          {/* <Image {...userImage as IImageProps} /> */}
          <Image {...image} />
        </UserIcon>
        <UserInformation>
          <Text>{name}</Text>
          {/* <Text>{username}</Text>  */}
          <Text>{tempDate}</Text>
          {/* <Text>{date}</Text> */}
        </UserInformation>
      </UserContainer>

      <MessageContainer>
        {/* <Text>{quotationMark}</Text> */}
        <Text>{tempMessage}</Text>
        {/* <Text>{message}</Text> */}
      </MessageContainer>
    </CardContainer>
  );
};

export default Testimonial;
