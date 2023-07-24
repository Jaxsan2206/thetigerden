import React from "react";
import { Container, Column } from "../Layout/Layout";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import Tile from "../Tile/Tile";
import { Flex } from "../FlexBox/FlexBox";
import ButtonWithLink from "../Button/Button";
import { GroupTitle } from "./TileGroup.style";

const TileGroup: React.FC<React.PropsWithChildren<any>> = ({
  tiles,
  title,
  cta,
}) => {
  const { colors } = useTheme() as ITheme;
  return (
    <Container fullWidth backgroundColor={colors.offwhite}>
      <Container>
        <GroupTitle>{title}</GroupTitle>
        <Flex flexWrap={"wrap"}>
          {tiles.map((tile: any, i: number) => (
            <Column
              key={i}
              width={[12, null, null, 6]}
              paddingRight={"16px"}
              paddingBottom={"16px"}
            >
              <Tile {...tile} />
            </Column>
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
