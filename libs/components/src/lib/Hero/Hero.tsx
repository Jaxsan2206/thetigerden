import React from "react";
import Image from "../Image/Image";
import { HeroVideo, PrimaryHeading, SecondaryHeading, Wrapper } from "./Hero.style";
import { IHeroProps } from "./Hero.interface";

const Hero: React.FC<IHeroProps> = ({
  image,
  video,
  primaryHeading,
  secondaryHeading,
}) => {
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
      <PrimaryHeading size={'xlarge'}>{primaryHeading}</PrimaryHeading>
      <SecondaryHeading size={'xlarge'}>{secondaryHeading}</SecondaryHeading>
    </Wrapper>
  );
};

export default Hero;
