import React from "react";
import { Box } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import ButtonWithLink from "../Button/Button";
import {
  ButtonColumn,
  FooterLinks,
  FooterWrapper,
  ImageColumn,
  LinksColumn,
  LinksColumnTitle,
} from "./Footer.style";
import { IFooterProps } from "./Footer.interface";

const Footer: React.FC<IFooterProps> = ({ columns, image, cta }) => (
  <footer>
    <FooterWrapper>
      <ImageColumn width={[12, null, 3]}>
        <Box height={"130px"} width={"135px"}>
          <Image {...image} />
        </Box>
      </ImageColumn>
      {columns?.map((column) => (
        <LinksColumn width={[12, null, 3]}>
          <LinksColumnTitle>{column.columnLabel}</LinksColumnTitle>
          {column.links.map((link) => (
            <FooterLinks href={link.href} children={link.label} />
          ))}
        </LinksColumn>
      ))}
      <ButtonColumn width={[12, null, 3]}>
        <ButtonWithLink variant={cta.variant} href={cta.url}>
          {cta.label}
        </ButtonWithLink>
      </ButtonColumn>
    </FooterWrapper>
  </footer>
);

export default Footer;
