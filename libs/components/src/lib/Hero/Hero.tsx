import React from "react";
import Image from "../Image/Image";
import {
  HeadingContainer,
  HeroVideo,
  PrimaryHeading,
  SecondaryHeading,
  Wrapper,
} from "./Hero.style";
import { IHeroProps } from "./Hero.interface";
import { useWindowWidth } from "../../../../hooks";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";

const Hero: React.FC<IHeroProps> = ({
  image,
  video,
  primaryHeading,
  secondaryHeading,
}) => {

  // Hero components needs a smaller variant. 
  //  With a still image 
  const width = useWindowWidth();
  const { breakpoints } = useTheme() as ITheme;
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  return (
    <Wrapper>
      {image?.src && <Image {...image} />}
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
