import React from "react";
import { Container, Grid } from "../Layout/Layout";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import Tile from "../Tile/Tile";
import { Box, Flex } from "../FlexBox/FlexBox";
import ButtonWithLink from "../Button/Button";
import { GroupTitle, StyledColumn } from "./TileGroup.style";
import { useWindowWidth } from "../../hooks";
import { ITitleGroupProps } from "./TileGroup.interface";

const TileGroup: React.FC<React.PropsWithChildren<ITitleGroupProps>> = ({
  tiles,
  title,
  cta, 
}) => {
  const { colors, breakpoints } = useTheme() as ITheme;
  const width = useWindowWidth(); 
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  return (
    <Box backgroundColor={colors.offwhite}>
      <Container>
        <GroupTitle size={isMobileNav ? "small" : "medium"}>{title}</GroupTitle>
        {tiles && (
          <Grid>
            {tiles.map((tile, i: number) => (
              <StyledColumn key={i} width={[12, null, 6, null]}>
                <Tile {...tile} />
              </StyledColumn>
            ))}
          </Grid>
        )}
        <Flex paddingBottom={"large"} justifyContent={"center"}>
          <ButtonWithLink href={cta?.url} variant={cta?.variant}>
            {cta?.label}
          </ButtonWithLink>
        </Flex>
      </Container>
    </Box>
  );
};

export default TileGroup;
