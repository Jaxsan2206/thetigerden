import React from "react";
import { NextImage, NextImageContainer } from "./Image.styles";
import { IImageProps } from "../../types/common";

const Image: React.FC<IImageProps> = ({ src, alt, type, ...rest }) => {
  return (
    <NextImageContainer {...rest}>
      <NextImage
        fill = {true}
        src={src}
        alt={alt}
        type={type as string}
      />
    </NextImageContainer>
  );
};

export default Image;
