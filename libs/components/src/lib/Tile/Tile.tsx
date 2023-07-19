import React from "react";
import { Column, Container } from "../Layout/Layout";
import { Box } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import { HoverTitle, TileTitle, TileWrapper } from "./Tile.styles";

const Tile: React.FC<React.PropsWithChildren<any>> = () => {
  const { colors } = useTheme() as ITheme;
  return (
    <Container fullWidth backgroundColor={colors.accent1}>
      <Container>
        <Column
          width={[12, null, null, 6]}
          paddingRight={"16px"}
          paddingBottom={"16px"}
        >
          <TileWrapper>
            <TileTitle>Muay Thai</TileTitle>
            <HoverTitle>Hover Text</HoverTitle>
            <Image
              src="https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png"
              alt="image1"
              type="background-image"
            />
          </TileWrapper>
        </Column>
      </Container>
    </Container>
  );
};

export default Tile;
