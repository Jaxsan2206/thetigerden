import { useTheme } from "@emotion/react";
import { useWindowWidth } from "../../hooks";
import { ITheme } from "../../styles/theme";
import { Box } from "../FlexBox/FlexBox";
import { Container, Grid } from "../Layout/Layout";
import { GroupTitle, StyledColumn } from "./PriceGroup.style";
import PriceCard from "../PriceCard/PriceCard";
import { IPriceGroupProps } from "./PriceCardGroup.interface";
import withRichText from "../../../../services/helpers/withRichText";

const PriceCardWithRichText = withRichText(PriceCard) 

const PriceCardGroup: React.FC<IPriceGroupProps> = ({ title, prices }) => {
    const { colors, breakpoints } = useTheme() as ITheme;
    const width = useWindowWidth(); 
    const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  return (
    <Box backgroundColor={colors.offwhite}>
      <Container>
        {title && (
          <GroupTitle size={isMobileNav ? "small" : "medium"}>
            {title.toUpperCase()}
          </GroupTitle>
        )}
        <Grid>
          {!!prices.length &&
            prices.map((price) => (
              <StyledColumn width={[12, null, 6, null]}>
                <PriceCardWithRichText {...price} />
              </StyledColumn>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PriceCardGroup