import React from "react";
import { HoverText, StyledImage, TileTitle, TileWrapper } from "./Tile.styles";
import { useTheme } from "@emotion/react";
import { useWindowWidth } from "../../hooks";
import { ITheme } from "../../styles/theme";
import { ITileProps } from "./Tile.interface";

const Tile: React.FC<React.PropsWithChildren<ITileProps>> = ({
  image = null,
  title = '',
  hoverText = '',
}) => {
  const { breakpoints } = useTheme() as ITheme;
  const width = useWindowWidth(); 
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  return (
    <TileWrapper>
      {title && <TileTitle>{title}</TileTitle>}
      {hoverText && <HoverText size={isMobileNav? "large" : "xxlarge"}>{hoverText}</HoverText>}
      {image?.src && <StyledImage {...image} height={'100%'}  />}
    </TileWrapper>
  );
};

export default Tile;
