import React, { useEffect, useRef, useState } from "react";
import { IHeaderProps } from "./Header.interface";
import {
  CartContainer,
  DesktopContainer,
  LinksContainer,
  Logo,
  LogoContainer,
  MobileContainer,
  NavLink,
  Wrapper,
} from "./Header.style";
import { useWindowWidth } from "../../hooks";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import { ILinkProps } from "../Link/Link.interface";
import Button from "../Button/Button";
import Burger from "./Burger/Burger";

//https://codepen.io/nodws/pen/mdQoEB

const Header: React.FC<IHeaderProps> = ({
  links = [],
  desktopLogo = null,
  mobileLogo = null,
  showCart = false,
}) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const width = useWindowWidth();
  const { breakpoints } = useTheme() as ITheme;
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setContentHeight(open ? getContentHeight(contentRef.current) : 0);
  }, [open]);

  const isMobileNav = width <= parseInt(breakpoints[breakpoints.length - 1]);
  const imageProps = isMobileNav ? mobileLogo : desktopLogo;

  const getContentHeight = (element: HTMLElement | null) => {
    return element ? element.scrollHeight : 0;
  };

  return (
    <Wrapper>
      <DesktopContainer>
        {!!imageProps?.src && <LogoContainer>
            <Logo href={'/'} {...imageProps} />
        </LogoContainer>}
        <Burger openCallBack={setOpen} openState={open} />
        {!isMobileNav && (
          <LinksContainer>
            {!!links?.length && links?.map((link: ILinkProps, i: number) => (
              <NavLink key={i} href={link?.href as string}>
                {link?.label}
              </NavLink>
            ))}
          </LinksContainer>
        )}
        {showCart && (
          <CartContainer>
            <Button
              variant={"primary"}
              icon={{ name: "ShoppingCart", iconPosition: "end" }}
              onClick={() => console.log('pressed cart')}
              disabled
            />
          </CartContainer>
        )}
      </DesktopContainer>
      {isMobileNav && (
        <MobileContainer
          open={open}
          contentHeight={contentHeight}
          ref={contentRef}
        >
          {/* TODO: Mobile dropdown needs styling */}
          {!!links?.length && links.map((link: ILinkProps, i: number) => (
            <NavLink key={i} href={link?.href as string}>
              {link?.label}
            </NavLink>
          ))}
        </MobileContainer>
        )}
    </Wrapper>
  );
};



export default Header;
