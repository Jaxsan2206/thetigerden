import styled from "@emotion/styled";
import { IBaseProps } from "../../../types/common";
import { Box } from "../../FlexBox/FlexBox";
import { HeroTitle } from "../../Typography/Typography";
import { IHeroTitleProps } from "../../Typography/Typography.interface";
import { IBoxProps } from "../../FlexBox/Flexbox.interface";
import { Grid } from "../../Layout/Layout";

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: { colors, space  }}) => ({
        backgroundColor: colors.offwhite,
        paddingTop: space.large,
        paddingBottom: space.large
    })
)

export const FormsTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.black, 
    })
)

export const StyledGrid: React.FC<React.PropsWithChildren<IBaseProps & IBoxProps>> = styled(Grid)(
    ({ theme: { space }}) => ({
        rowGap: space.xxlarge
    })
)