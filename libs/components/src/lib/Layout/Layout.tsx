import { Box } from "../FlexBox/FlexBox";
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

export const Column: React.FC<React.PropsWithChildren<IColumnProps>> = ({ children, width, ...rest }) => (
  <StyledColumn width={width} height={'auto'} {...rest}>
    {children}
  </StyledColumn>
);
