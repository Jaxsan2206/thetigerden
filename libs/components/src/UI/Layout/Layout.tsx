import { Box } from "../FlexBox/FlexBox";

export const Container = ({ 
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