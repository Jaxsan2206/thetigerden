import styled from "@emotion/styled";
import { IBaseProps } from "../../types/common";
import { Box } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { HeroTitle } from "../Typography/Typography";
import { IHeroTitleProps } from "../Typography/Typography.interface";

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps & IBoxProps>> = styled(Box)(
    ({ theme: { colors, space }}) => ({
        backgroundColor: colors.offblack, 
        paddingTop: space.xlarge, 
        paddingBottom: space.xlarge
    })
)

