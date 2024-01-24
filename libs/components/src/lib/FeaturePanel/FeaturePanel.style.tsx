import styled from "@emotion/styled";
import { IBaseProps } from "../../types/common";
import { Box, Flex } from "../FlexBox/FlexBox";
import { Column } from "../Layout/Layout";
import { IColumnProps } from "../Layout/Layout.interface";
import { HeroTitle, Text } from "../Typography/Typography";
import { IHeroTitleProps, ITextProps } from "../Typography/Typography.interface";
import { IBoxProps } from "../FlexBox/Flexbox.interface";

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: { colors, space  }}) => ({
        backgroundColor: colors.offblack,
        paddingTop: space.large,
        paddingBottom: space.large
    })
)

export const ImageContainer: React.FC<React.PropsWithChildren<IBoxProps>> = styled(Flex)({
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }
)

export const TextColumn: React.FC<React.PropsWithChildren<IBaseProps & IColumnProps>> = styled(Column)(
    ({ theme: { space, mediaQueries }}) => ({
        [mediaQueries.untilMedium]: {
            paddingTop: space.xlarge
        }
    })
)

export const Content: React.FC<React.PropsWithChildren<IBaseProps & IColumnProps>> = styled(Flex)({
        flexDirection: 'column',
        justifyContent: 'center',
    }
)


export const FeaturePanelTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.accent1, 
    })
)

export const FeaturePanelText: React.FC<React.PropsWithChildren<IBaseProps & ITextProps>> = styled(Text)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.secondary, 
    })
)