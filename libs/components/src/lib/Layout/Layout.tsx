import { Box, Flex } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IColumnProps, IContainerProps } from "./Layout.interface";
import { StyledColumn } from "./Layout.styles";

export const Container: React.FC<React.PropsWithChildren<IContainerProps>> = ({
  children,
  fullWidth = false,
  ...rest
}) => (
  <Box
    px={["base", null]}
    width="100%"
    mx="auto"
    maxWidth={fullWidth ? "100%" : ["none", "none", "960px", "1168px"]}
    {...rest}
  >
    {children}
  </Box>
);

export const Grid: React.FC<React.PropsWithChildren<IBoxProps>> = ({ children, ...rest }) => (
  <Flex mx={[0, null, -3]} flexWrap={'wrap'} {...rest}>
    {children}
  </Flex>
);

export const Column: React.FC<React.PropsWithChildren<IColumnProps>> = ({ children, width, ...rest }) => (
  <StyledColumn width={width} height={'auto'} {...rest}>
    {children}
  </StyledColumn>
); 


// TODO: Need to great a Group layout component where you can choose how many components you want per row. 