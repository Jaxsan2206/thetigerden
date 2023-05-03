import React from "react";
import { NextImage, NextImageContainer } from "./Image.styles";
import { IImageProps } from "./Images.interface";

const Image: React.FC<IImageProps> = ({ image, height, width, type }) => {
  return (
    <NextImageContainer>
      <NextImage
        src={image.src}
        alt={image.alt}
        width={width}
        height={height}
        type = {type}
      />
    </NextImageContainer>
  );
};

export default Image;
