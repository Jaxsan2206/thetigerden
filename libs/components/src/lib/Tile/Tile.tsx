import React from "react";
import Image from "../Image/Image";
import { HoverTitle, StyledImage, TileTitle, TileWrapper } from "./Tile.styles";
import { useTheme } from "@emotion/react";
import { useWindowWidth } from "../../../../hooks";
import { ITheme } from "../../styles/theme";

const Tile: React.FC<React.PropsWithChildren<any>> = ({
  image,
  title,
  hoverText,
}) => {
  const { breakpoints } = useTheme() as ITheme;
  const width = useWindowWidth(); 
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  return (
    <TileWrapper>
      <TileTitle>{title}</TileTitle>
      <HoverTitle size={isMobileNav? "large" : "xxlarge"}>{hoverText}</HoverTitle>
      <StyledImage {...image} height={'100%'}  />
    </TileWrapper>
  );
};

export default Tile;
