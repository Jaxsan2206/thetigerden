import styled from "@emotion/styled";
import { IBaseProps } from "../../types/common";
import { Box, Flex } from "../FlexBox/FlexBox";
import { Column } from "../Layout/Layout";
import { IColumnProps } from "../Layout/Layout.interface";
import { HeroTitle, Text } from "../Typography/Typography";
import { IHeroTitleProps, ITextProps } from "../Typography/Typography.interface";

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: {colors }}) => ({
        backgroundColor: colors.offblack 
    })
)

export const TextWrapper: React.FC<React.PropsWithChildren<IBaseProps & IColumnProps>> = styled(Column)(
    ({ theme: { space }}) => ({
        paddingRight: space.xxxlarge, 
    })
)

export const FeaturePanelTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.accent1
    })
)

export const FeaturePanelText: React.FC<React.PropsWithChildren<IBaseProps & ITextProps>> = styled(Text)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.secondary, 
        textAlign: 'justify'
    })
)

export const StyledFlex: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Flex)(
    ({ theme: { space }}) => ({
        flexWrap: 'wrap', 
        paddingTop: space.xxxlarge, 
        paddingBottom: space.xxxlarge
    })
)