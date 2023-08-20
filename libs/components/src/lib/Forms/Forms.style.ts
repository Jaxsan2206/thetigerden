import styled from "@emotion/styled"
import { IBaseProps } from "../../types/common"
import { Box, Flex } from "../FlexBox/FlexBox"
import { Column } from "../Layout/Layout"
import { IColumnProps } from "../Layout/Layout.interface"
import { HeroTitle, Text } from "../Typography/Typography"
import { IHeroTitleProps, ITextProps } from "../Typography/Typography.interface"

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: {colors }}) => ({
        backgroundColor: colors.offwhite 
    })
)

export const TextWrapper: React.FC<React.PropsWithChildren<IBaseProps & IColumnProps>> = styled(Column)(
    ({ theme: { space, mediaQueries }}) => ({
        paddingLeft: space.xxxlarge, 

        [mediaQueries.untilMedium]: {
            paddingLeft: 0, 
            paddingTop: space.xlarge
        }
    })
)


export const FormsTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.black, 
    })
)

export const FormsText: React.FC<React.PropsWithChildren<IBaseProps & ITextProps>> = styled(Text)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.black, 
    })
)

export const StyledFlex: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Flex)(
    ({ theme: { space }}) => ({
        flexWrap: 'wrap', 
        alignItems: 'center', 
        paddingTop: space.xlarge, 
        paddingBottom: space.xlarge
    })
)