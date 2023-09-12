import React from "react";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IBaseProps } from "../../types/common";
import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";
import { IContainerProps } from "../Layout/Layout.interface";
import { Container } from "../Layout/Layout";
import { IHeroTitleProps } from "../Typography/Typography.interface";
import { HeroTitle } from "../Typography/Typography";

export const CarouselContainer: React.FC<IContainerProps & IBaseProps> =
  styled(Container)(({ theme: { space } }) => ({
    padding: space.large,
  }));

export const CarouselBox: React.FC<IBoxProps & IBaseProps> = styled(Box)(
  ({ theme: { colors, space } }) => ({
    backgroundColor: colors.greydark,
    padding: space.large
  })
);

export const CarouselTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
  ({ theme: { space, colors }}) => ({
      paddingBottom: space.large, 
      color: colors.black, 
  })
)