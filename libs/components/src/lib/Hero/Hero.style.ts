import styled from "@emotion/styled";
import { HeroTitle } from "../Typography/Typography";
import { Box } from "../FlexBox/FlexBox";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { IBaseProps } from "../../types/common";
import { IHeroTitleProps } from "../Typography/Typography.interface";
import { variant } from "styled-system";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { ReactPlayerProps } from "react-player";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface IWrapperProps extends IBoxProps {
  variant: 'small' | 'large'
}

export const Wrapper: React.FC<PropsWithChildren<IWrapperProps>> = styled(Box)(
  {
    width: "100%",
    overflow: 'hidden', 
    position: 'relative',
  },
  () => (
    variant({
        variants: {
            large: {
              height: '564px'
            }, 
            small: {
              height: '320px'
            }
        }
    })
), 
);

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

interface IHeroImageProps {
  backgroundImage: string;
}

export const HeroImage: React.FC<PropsWithChildren<IHeroImageProps>> = styled(Box)(
  ({ backgroundImage }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    filter: "brightness(50%)",
}));

export const HeroVideo: React.FC<PropsWithChildren<ReactPlayerProps>> = styled(ReactPlayer)({
  filter: "brightness(50%)",
  video: {
    objectFit: "cover",
  },
});

export const HeadingContainer: React.FC<PropsWithChildren<IBoxProps>> = styled(Box)({
  position: 'absolute', 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});