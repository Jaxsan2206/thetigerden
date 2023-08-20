import React from "react";
import { Container, Column } from "../Layout/Layout";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import Tile from "../Tile/Tile";
import { Flex } from "../FlexBox/FlexBox";
import ButtonWithLink from "../Button/Button";
import { GroupTitle, StyledColumn } from "./TileGroup.style";
import { useWindowWidth } from "../../../../hooks";

const TileGroup: React.FC<React.PropsWithChildren<any>> = ({
  tiles,
  title,
  cta,
}) => {
  const { colors, breakpoints } = useTheme() as ITheme;
  const width = useWindowWidth(); 
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  return (
    <Container fullWidth backgroundColor={colors.offwhite}>
      <Container>
        <GroupTitle size={isMobileNav ? 'small' : 'medium'}>{title}</GroupTitle>
        <Flex flexWrap={"wrap"}>
          {tiles.map((tile: any, i: number) => (
            <StyledColumn
              key={i}
              width={[12, null, 6, null]}
            >
              <Tile {...tile} />
            </StyledColumn>
          ))}
        </Flex>
        <Flex paddingBottom={"large"} justifyContent={"center"}>
          <ButtonWithLink href={cta?.url} variant={cta?.variant}>
            {cta?.label}
          </ButtonWithLink>
        </Flex>
      </Container>
    </Container>
  );
};

export default TileGroup;
