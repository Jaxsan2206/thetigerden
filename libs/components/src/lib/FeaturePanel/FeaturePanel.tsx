import React from "react";
import { Column, Container } from "../Layout/Layout";
import { Wrapper } from "./FeaturePanel.style";
import { Box, Flex } from "../FlexBox/FlexBox";
import { HeroTitle } from "../Typography/Typography";
import { Text } from "../Typography/Typography";
import ButtonWithLink from "../Button/Button";
import Image from "../Image/Image";

const FeaturePanel = ({}) => {

    const copy= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  return (
    <Wrapper>
      <Container>
        <Flex flexWrap={"wrap"} paddingY={'80px'}>
          <Column width={[12, null, null, 6]} paddingRight={'72px'}>
            <HeroTitle color={'orange'} paddingBottom={'24px'}>
                ABOUT US
            </HeroTitle>
            <Text color={'white'} textAlign={'justify'} paddingBottom={'24px'}>
                {copy}
            </Text>
            <ButtonWithLink variant={'primary'}>
                Learn More
            </ButtonWithLink>
          </Column>
          <Column  width={[12, null, null, 6] }
          >
            <Box height={'100%'}>
            <Image
            src="https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png"
            alt="featurepanelimage"/>
            </Box>
          </Column>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default FeaturePanel;
