import styled from "@emotion/styled";
import { system } from "styled-system";
import { IBaseProps } from "../../types/common";
import { Flex, Box } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { Container } from "../Layout/Layout";
import { IContainerProps } from "../Layout/Layout.interface";
import { HeroTitle } from "../Typography/Typography";
import { IHeroTitleProps } from "../Typography/Typography.interface";

export const FlexContainer: React.FC<React.PropsWithChildren<IBoxProps & IBaseProps>> = styled(Flex)(
    ({ theme: { space } }) => ({ 
      gap: space.large, 
      width: '100%',
      paddingTop: space.base,
      paddingBottom: space.base
    })
  );
  
export const Slide: React.FC<React.PropsWithChildren<IContainerProps & IBaseProps & { slideSize: number[] }>> = styled(Box)(
() => (
    system({
    slideSize: {
        property: 'flex',
        transform: (value: number) => {
        return `0 0 ${100/value}%`
        }
    }
    })
)
)

// export const SlideItemContainer: React.FC<React.PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)({
//         overflow: 'hidden'
// })

export const SlideItemContainer: React.FC<React.PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
    ({ theme: { space }}) => ({
        overflow: 'hidden',
        paddingLeft: space.xlarge, 
        paddingRight: space.xlarge
    })
)


export const Wrapper: React.FC<React.PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
    ({ theme: { colors, space }}) => ({
        backgroundColor: colors.offwhite,
        paddingTop: space.large,
        paddingBottom: space.large,
    })
)

export const ControlWrapper: React.FC<React.PropsWithChildren<IBoxProps & IBaseProps & { isMobileNav?: boolean }>> = styled(Flex)(
    ({ theme: { space }, isMobileNav }) => ({
        alignItems: 'center',
        justifyContent: 'center',
        gap: space.small,
        paddingTop: isMobileNav ? space.medium : space.none
    })
)

export const CarouselHeader: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(Flex)({
        justifyContent: 'space-between', 
})


export const CarouselTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { colors, space }}) => ({
        color: colors.black, 
        paddingBottom: space.base,
    })
)