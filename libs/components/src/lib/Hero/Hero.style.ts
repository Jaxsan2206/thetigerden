import styled from "@emotion/styled";
import { HeroTitle } from "../Typography/Typography";
import { Box } from "../FlexBox/FlexBox";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { IBaseProps } from "../../types/common";
import { IHeroTitleProps } from "../Typography/Typography.interface";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Wrapper = styled(Box)({
    width: "100%",
    height: "564px",
    overflow: 'hidden', 
    position: 'relative'
});

export const PrimaryHeading: React.FC<PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
  ({ theme: { colors }}) => ({
    color: colors.secondary, 
  })
);

export const SecondaryHeading: React.FC<PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
  ({ theme: { colors, mediaQueries }}) => ({
    color: colors.accent1, 
    [mediaQueries.medium]: {
      paddingLeft: '200px', 
      textWrap: 'nowrap'
    }
  })
);

export const HeroVideo = styled(ReactPlayer)({
  filter: "brightness(50%)",
  video: {
    objectFit: "cover",
  },
});

export const HeadingContainer = styled(Box)({
  position: 'absolute', 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});