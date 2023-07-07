import React from "react";
import { Box, Flex } from "../FlexBox/FlexBox";
import { Column, Container } from "../Layout/Layout";
import Image from "../Image/Image";
import NextLink from "../Link/Link";
import { PageTitle } from "../Typography/Typography";
import ButtonWithLink from "../Button/Button";
import { FooterLinks } from "./Footer.style";

const Footer: React.FC = () => {
  const columns = [
    {
      columnLabel: "Quick Links",
      links: [
        {
          label: "About Us",
          url: "https://www.google.com",
        },
        {
          label: "Classes",
          url: "https://www.google.com",
        },
        {
          label: "Timetable & Prices",
          url: "https://www.google.com",
        },
        {
          label: "Contact Us",
          url: "https://www.google.com",
        },
      ],
    },
    {
      columnLabel: "Contact",
      links: [
        {
          label: "07393326642",
          url: "https://www.google.com",
        },
        {
          label: "jaxsan@gmail.com",
          url: "https://www.google.com",
        },

      ],
    },
  ];
  return (
    <footer>
      <Container  py={"33px"}>
        <Flex flexWrap={'wrap'}>
          <Column
            width={[12, null, 3]}
            flexDirection={"column"}
            display={"flex"}
          >
            <Box height={"130px"} width={"135px"}>
              <Image
                src="https://images.ctfassets.net/c5iz9ysb7wxa/6xtlGnzFCYaLY25BGYyN4n/bbacd8974e648f2aefff8bd4ace4749c/MobileLogo-Tigerden.png"
                alt="Logo"
              />
            </Box>
          </Column>
          {columns.map((column) => (
            <Column
              width={[12, null, 3]}
              flexDirection={"column"}
              display={"flex"}
              px={"12px"}
            >
              <PageTitle size={"medium"} fontWeight={600}
              paddingBottom={'18px'}
              
              >{column.columnLabel}</PageTitle>

              {column.links.map((link) => (
                <FooterLinks
                 href={link.url}>{link.label}
                 </FooterLinks>
              ))}
            </Column>
          ))}
          <Column
            width={[12, null, 3]}
            flexDirection={"column"}
            display={"flex"}
            height={"165px"}
            alignItems={"center"}
          >
            <ButtonWithLink variant="primary">
              {"Shop Now!"}
            </ButtonWithLink>
          </Column>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
