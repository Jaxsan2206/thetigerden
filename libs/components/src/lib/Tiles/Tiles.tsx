import React from "react";
import { Column, Container } from "../Layout/Layout";
import ButtonWithLink from "../Button/Button";
import { Flex, Box } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import { HeroTitle, PageTitle } from "../Typography/Typography";

const Tiles: React.FC<React.PropsWithChildren<any>> = () => {

  const {colors } = useTheme() as ITheme; 
  return (
    <Container fullWidth backgroundColor={colors.accent1}>
      <Container>
        <HeroTitle>
          CLASSES
        </HeroTitle>
      <Flex flexWrap={"wrap"} paddingY={"80px"}>

        <Column width={[12, null, null, 6]} paddingRight={'16px'} paddingBottom={'16px'}>
        <Box height={"400px"}  >
          <Image src="https://images.ctfassets.net/c5iz9ysb7wxa/438ranPDMMXOTqJUOUHdR6/fa36c9f3b01b20ac07e7f2e8079c8842/image_24.png" alt='image1'/>
        </Box>
        </Column>
        <Column width={[12, null, null, 6]} paddingLeft={'16px'} paddingBottom={'16px'}>
          <Box height={"400px"}>
          <Image src="https://images.ctfassets.net/c5iz9ysb7wxa/438ranPDMMXOTqJUOUHdR6/fa36c9f3b01b20ac07e7f2e8079c8842/image_24.png" alt='image1'/>

          </Box>
        </Column>
        <Column width={[12, null, null, 6]} paddingRight={'16px'} paddingTop={'16px'}>
          <Box height={"400px"}>
          <Image src="https://images.ctfassets.net/c5iz9ysb7wxa/438ranPDMMXOTqJUOUHdR6/fa36c9f3b01b20ac07e7f2e8079c8842/image_24.png" alt='image1'/>

          </Box>
        </Column>
        <Column width={[12, null, null, 6]} paddingLeft={'16px'} paddingTop={'16px'}>
          <Box height={"400px"}>
          <Image src="https://images.ctfassets.net/c5iz9ysb7wxa/438ranPDMMXOTqJUOUHdR6/fa36c9f3b01b20ac07e7f2e8079c8842/image_24.png" alt='image1'/>

          </Box>
        </Column>
        <Box width = '100%' justifyContent={'center'} display={'flex'} paddingTop={'32px'}>

          <ButtonWithLink variant={"secondary"}>See All Classes</ButtonWithLink>
        </Box>
      </Flex>
      </Container>
    </Container>
  );
};

export default Tiles;
