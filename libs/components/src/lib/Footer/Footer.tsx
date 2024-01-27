import React from "react";
import Image from "../Image/Image";
import { IFooterProps } from "./Footer.interface";
import NextLink from "../Link/Link";
import { Text } from "../Typography/Typography";
import Icon from "../Icon/Icon";
import { withLink } from "../Link/withLink";
import { FooterWrapper, StyledGrid, FooterColumn, SocialMediaWrapper, ColumnTitle } from "./Footer.style";
import Button from "../Button/Button";

const IconLink = withLink(Icon);

const Footer: React.FC<IFooterProps> = ({
  columns = [],
  image = null,
  cta = null,
  instagram = "",
  tiktok = "",
  facebook = "",
  youtube = "",
}) => {
  return (
    <FooterWrapper fullWidth>
      <StyledGrid>
        <FooterColumn width={[12, null, 3]}>
         { image?.src &&  <Image {...image} width={"145px"} />}
          <SocialMediaWrapper>
            {youtube && (
              <IconLink
                name="YouTube"
                size="28px"
                color="black"
                href={youtube}
              />
            )}
            {instagram && (
              <IconLink
                name="Instagram"
                size="28px"
                color="black"
                href={instagram}
              />
            )}
            {facebook && (
              <IconLink
                name="Facebook"
                size="28px"
                color="black"
                href={facebook}
              />
            )}
            {tiktok && (
              <IconLink name="Tiktok" size="28px" color="black" href={tiktok} />
            )}
          </SocialMediaWrapper>
        </FooterColumn>
        {!!columns.length && columns?.map((column, i) => (
          <FooterColumn width={[12, null, 3]} key={i}>
            <ColumnTitle size={"large"}>{column?.columnLabel}</ColumnTitle>
            {column?.links?.map((link, i) => {
              if (link?.href) {
                return (
                  <NextLink key={i} href={link?.href} children={link?.label} />
                );
              } else {
                return (
                  <Text key={i} size={"small"}>
                    {link?.label}
                  </Text>
                );
              }
            })}
          </FooterColumn>
        ))}
        <FooterColumn width={[12, null, 3]}>
          {cta?.href && <Button variant={cta?.variant} href={cta?.href}>
            {cta?.children}
          </Button>}
        </FooterColumn>
      </StyledGrid>
    </FooterWrapper>
  );
};



export default Footer;
