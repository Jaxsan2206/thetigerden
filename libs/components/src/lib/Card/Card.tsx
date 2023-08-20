import React from "react";
import { Box } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import { Text } from "../Typography/Typography";


const Card: React.FC<any> = ({
  ...rest
}) => {
  const image = {
    src: "https://images.ctfassets.net/joh4bu6temev/4wFtfsk1LVkPti4E5Excw4/0cd6794111a3b8d21ecb11f69d9909e5/IMG_0439.jpeg",
    alt: "image1",
    type: "background-image",
  }; 
  return (
    //  Container needs to be put around the Image and the Card Content. 
    // Both containers should add to 540 pixels
    // maxHeight of the image should be 250 pixels 
   <Box height={'540px'} {...rest}>
      <Image {...image} />
      <Text size={'xxlarge'} paddingTop={'24px'} paddingBottom={'24px'}>Muay Thai</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr</Text>
   </Box>
  );
};

export default Card
