import React from "react";
import Image from "../Image/Image";
import ButtonWithLink from "../Button/Button";
import { IFooterProps } from "./Footer.interface";
import NextLink from "../Link/Link";
import { Text } from "../Typography/Typography";
import Icon from "../Icon/Icon";
import { withLink } from "../Link/withLink";
import { FooterWrapper, StyledGrid, FooterColumn, SocialMediaWrapper, ColumnTitle } from "./Footer.style";

const IconLink = withLink(Icon);

const Footer: React.FC<IFooterProps> = ({ columns, image, cta, instagram, tiktok, facebook, youtube }) => {
  return (
    <FooterWrapper fullWidth>
      <StyledGrid>
        <FooterColumn width={[12, null, 3]}>
          <Image {...image} width={"145px"} />
          <SocialMediaWrapper>
            {youtube && (
              <IconLink
                name="YouTube"
                size="28px"
                color="black"
                href={"www.google.com"}
              />
            )}
            {instagram && (
              <IconLink
                name="Instagram"
                size="28px"
                color="black"
                href={"www.google.com"}
              />
            )}
            {facebook && (
              <IconLink
                name="Facebook"
                size="28px"
                color="black"
                href={"www.google.com"}
              />
            )}
            {tiktok && (
              <IconLink
                name="Tiktok"
                size="28px"
                color="black"
                href={"www.google.com"}
              />
            )}
          </SocialMediaWrapper>
        </FooterColumn>
        {columns?.map((column, i) => (
          <FooterColumn width={[12, null, 3]} key={i}>
            <ColumnTitle size={"large"}>{column.columnLabel}</ColumnTitle>
            {column.links.map((link, i) => {
              if (link?.href) {
                return (
                  <NextLink key={i} href={link.href} children={link.label} />
                );
              } else {
                return <Text key={i} size={"small"}>{link.label}</Text>;
              }
            })}
          </FooterColumn>
        ))}
        <FooterColumn width={[12, null, 3]}>
          <ButtonWithLink variant={cta?.variant} href={cta?.url}>
            {cta?.label}
          </ButtonWithLink>
        </FooterColumn>
      </StyledGrid>
    </FooterWrapper>
  );};



export default Footer;
