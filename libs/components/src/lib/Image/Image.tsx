import React from "react";
import { IImageProps } from "../../types/common";
import { Box } from "../FlexBox/FlexBox";

const Image: React.FC<IImageProps> = ({ src = '', alt = '', type, ...rest }) => {
  if (!src) return <></>
  return (
      <Box
        as="img"
        src={src}
        alt={alt}
        style={{ filter: type && "brightness(50%)"}}
        {...rest}
      />
  );
};

export default Image;
