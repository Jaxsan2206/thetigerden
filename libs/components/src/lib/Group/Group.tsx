import { useTheme } from "@emotion/react";
import { useWindowWidth } from "../../hooks";
import { ITheme } from "../../styles/theme";
import { Box, Flex } from "../FlexBox/FlexBox";
import { Column, Container, Grid } from "../Layout/Layout";
import { HeroTitle } from "../Typography/Typography";
import React from "react";
import { IButtonProps } from "../Button/Button.interface";
import Button from "../Button/Button";

export interface IGroupProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  componentsPerRow: 1 | 2 | 3 | 4 | 6;
  cta?: IButtonProps
}

const Group: React.FC<IGroupProps> = ({
  title,
  children,
  componentsPerRow,
  cta
}) => {
  const { colors, breakpoints } = useTheme() as ITheme;
  const width = useWindowWidth();
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  const responsiveArray = [12, null, 12/componentsPerRow, null]
  const showButton = cta?.children && cta?.href
  return (
    <Box backgroundColor={colors.offwhite} paddingY={'large'}>
      <Container>
        {title && (
          <HeroTitle pb={'xlarge'} size={isMobileNav ? "small" : "medium"}>
            {title.toUpperCase()}
          </HeroTitle>
        )}
        <Grid style={{ rowGap: '24px'}}>
          {React.Children.map(
            children as React.ReactElement[],
            (child: React.ReactElement, i) => (
              <Column key={i} width={responsiveArray}>
                {child}
              </Column>
            )
          )}
        </Grid>
        {showButton && <Flex paddingTop={"large"} justifyContent={"center"}>
          <Button {...cta}/>
        </Flex>}
      </Container>
    </Box>
  );
};

export default Group;
