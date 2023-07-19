import React from "react";
import { Flex } from "../FlexBox/FlexBox";
import { IHeader } from "./Header.interface";
import ButtonWithLink from "../Button/Button";
import Image from "../Image/Image";
import { ImageWrapper, NavLink, Wrapper } from "./Header.style";

const Header: React.FC<IHeader> = ({ links, image, cta }) => {
  return (
      <Wrapper>
        <Flex>
          {links.map((el: string, i: number) => (
            <NavLink key={i} href={el}>
              {el}
            </NavLink>
          ))}
        </Flex>
        <ImageWrapper width={image.width} height={image.height}>
            <Image {...image} />
        </ImageWrapper>
        <ButtonWithLink variant={cta.variant} href={cta.url}>{cta.label}</ButtonWithLink>
      </Wrapper>
  );
};

export default Header;
