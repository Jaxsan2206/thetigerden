import { useTheme } from "@emotion/react";
import { useWindowWidth } from "../../hooks";
import { ITheme } from "../../styles/theme";
import { Box } from "../FlexBox/FlexBox";
import { Column, Container, Grid } from "../Layout/Layout";
import { PageTitle } from "../Typography/Typography";
import React from "react";

export interface IGroupProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  componentsPerRow: 1 | 2 | 3 | 4 | 6;
}

const Group: React.FC<IGroupProps> = ({
  title,
  children,
  componentsPerRow,
}) => {
  const { colors, breakpoints } = useTheme() as ITheme;
  const width = useWindowWidth();
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  const responsiveArray = [12, null, 12/componentsPerRow, null]
  return (
    <Box backgroundColor={colors.offwhite}>
      <Container>
        {title && (
          <PageTitle size={isMobileNav ? "small" : "medium"}>
            {title.toUpperCase()}
          </PageTitle>
        )}
        <Grid>
          {React.Children.map(
            children as React.ReactElement[],
            (child: React.ReactElement, i) => (
              <Column key={i} width={responsiveArray}>
                {child}
              </Column>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Group;
