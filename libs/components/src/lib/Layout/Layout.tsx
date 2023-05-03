import { Box } from "../FlexBox/FlexBox";
import { IContainerProps } from "./Layout.interface";

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