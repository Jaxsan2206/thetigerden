import React from "react";
import { Box, Flex } from "../FlexBox/FlexBox";
import Image from "../Image/Image";
import { HeroTitle, PageTitle, Text } from "../Typography/Typography";
import { Column, Container, Grid } from "../Layout/Layout";
import Card from "../Card/Card";
import ButtonWithLink from "../Button/Button";

const CardGroup: React.FC<any> = ({}) => {

  //  Remove left and right padding at mobile view
  return (
    <Box>
    <Container>
      <Grid>
        <Column width={[12, 12, 12, 3]} padding={'20px'}>
          <HeroTitle>CLASSES</HeroTitle>
          <ButtonWithLink variant={"secondary"}>View TimeTable</ButtonWithLink>
        </Column>
        <Column width={[12, 12, 12, 9]}>
          <Flex flexWrap={"wrap"}>

            <Box width={['100%', '50%']} paddingLeft = {'20px'} paddingRight={'20px'} paddingTop = {'20px'}>
            <Card ></Card>
            </Box>
            <Box width={['100%', '50%']} paddingLeft = {'20px'} paddingRight={'20px'} paddingTop = {'20px'}>
            <Card ></Card>
            </Box>
            <Box width={['100%', '50%']} paddingLeft = {'20px'} paddingRight={'20px'} paddingTop = {'20px'}>
            <Card ></Card>
            </Box>
            <Box width={['100%', '50%']} paddingLeft = {'20px'} paddingRight={'20px'} paddingTop = {'20px'}>
            <Card ></Card>
            </Box>
            <Box width={['100%', '50%']} paddingLeft = {'20px'} paddingRight={'20px'} paddingTop = {'20px'}>
            <Card ></Card>
            </Box>

          </Flex>
        </Column>
      </Grid>
    </Container>
    </Box>
  );
};

export default CardGroup;
