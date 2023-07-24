import React from "react";
import Image from "../Image/Image";
import { HoverTitle, TileTitle, TileWrapper } from "./Tile.styles";

const Tile: React.FC<React.PropsWithChildren<any>> = ({
  image,
  title,
  hoverText,
}) => {
  console.log('image', image)
  return (
    <TileWrapper>
      <TileTitle>{title}</TileTitle>
      <HoverTitle size={"xxlarge"}>{hoverText}</HoverTitle>
      <Image {...image} />
    </TileWrapper>
  );
};

export default Tile;
