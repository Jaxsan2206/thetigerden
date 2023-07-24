import React from "react";
import { CardContainer, MessageContainer, UserContainer } from "./Testimonial.style";
import { Box } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import { Text } from "../Typography/Typography";
import { ITestimonialProps } from "./Testimonial.interface";
import { IImageProps } from "../../types/common";

const image = {
  src: "https://i.etsystatic.com/20164836/r/il/bd77b8/3943923229/il_fullxfull.3943923229_ebhm.jpg",
  alt: "barbie",
};

const name = "Jaxsan";
const date = "24.07.2023";
const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const Testimonial: React.FC<React.PropsWithChildren<ITestimonialProps>> = ({userImage}) => {
  return (
    <CardContainer>
      <UserContainer>
        <Box width="72px" height="72px">
          {/* <Image {...userImage as IImageProps} /> */}
          <Image {...image}/>
        </Box>
        <Text>{name}<br/>{date}</Text>
      </UserContainer>
      <MessageContainer>
        <Text>{message}</Text>
      </MessageContainer>
    </CardContainer>
  );
};

export default Testimonial;
