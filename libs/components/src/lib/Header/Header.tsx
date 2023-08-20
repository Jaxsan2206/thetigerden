import React, { useEffect, useRef, useState } from "react";
import { Box, Flex } from "../FlexBox/FlexBox";
import { IHeader } from "./Header.interface";
import ButtonWithLink from "../Button/Button";
import Image from "../Image/Image";
import {
  BurgerLines,
  CartWrapper,
  ImageContainer,
  LinksWrapper,
  Logo,
  MobileWrapper,
  NavLink,
  StyledBurger,
  Wrapper,
} from "./Header.style";
import { useWindowWidth } from "../../../../hooks";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import { ILinkProps } from "../Link/Link.interface";
import Button from "../Button/Button";

const Header: React.FC<IHeader> = ({ links, image, mobileImage,  cta }) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const width = useWindowWidth();
  const { breakpoints } = useTheme() as ITheme;
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setContentHeight(open ? getContentHeight(contentRef.current) : 0);
  }, [open]);

  const isMobileNav = width <= parseInt(breakpoints[breakpoints.length - 1]);
  const imageProps = isMobileNav ? mobileImage: image

  const getContentHeight = (element: HTMLElement | null) => {
    return element ? element.scrollHeight : 0;
  };

  return (
    <>
      <Wrapper>
        <ImageContainer  >
          <Logo  {...imageProps}/>
        </ImageContainer>
        <Burger openCallBack={setOpen} openState={open} />
        {!isMobileNav && (
          <LinksWrapper>
            {links.map((el: ILinkProps, i: number) => (
              <NavLink key={i} href={el.href as string}>
                {el.label}
              </NavLink>
            ))}
          </LinksWrapper>
        )}
        <CartWrapper>
        <Button variant={cta.variant} href={cta.url}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
        </Button>
        </CartWrapper>
      </Wrapper>
      {isMobileNav && <MobileWrapper open={open} contentHeight={contentHeight} ref={contentRef}>
        {links.map((el: ILinkProps, i: number) => (
          <NavLink key={i} href={el.href as string}>
            {el.label}
          </NavLink>
        ))}
      </MobileWrapper>}
    </>
  );
};

const Burger = ({
  openCallBack,
  openState,
}: {
  openCallBack: (state: boolean) => void;
  openState: boolean;
}) => (
  <StyledBurger open={openState} onClick={() => openCallBack(!openState)}>
    <BurgerLines />
    <BurgerLines />
    <BurgerLines />
  </StyledBurger>
);

export default Header;
