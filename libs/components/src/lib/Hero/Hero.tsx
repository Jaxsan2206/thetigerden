import React from "react";
import {
  HeadingContainer,
  HeroImage,
  HeroVideo,
  PrimaryHeading,
  SecondaryHeading,
  Wrapper,
} from "./Hero.style";
import { IHeroProps } from "./Hero.interface";
import { useWindowWidth } from "../../hooks";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import { Box } from "../FlexBox/FlexBox";

const Hero: React.FC<IHeroProps> = ({
  image,
  video,
  primaryHeading,
  secondaryHeading,
  variant = 'large'
}) => {
  const width = useWindowWidth();
  const { breakpoints } = useTheme() as ITheme;
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  return (
    <Wrapper variant={variant}>
      {image?.src && (
        <Box>
          <HeroImage backgroundImage = {image?.src} />
        </Box>
      )}
      {video && (
        <HeroVideo
          url={video}
          playing
          loop
          muted
          width="100%"
          height="inherit"
          controls={false}
        />
      )}
      <HeadingContainer>
        <PrimaryHeading size={isMobileNav ? "large" : "xlarge"}>
          {primaryHeading}
        </PrimaryHeading>
        <SecondaryHeading size={isMobileNav ? "large" : "xlarge"}>
          {secondaryHeading}
        </SecondaryHeading>
      </HeadingContainer>
    </Wrapper>
  );
};

export default Hero;
