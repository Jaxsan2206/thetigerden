import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IAvatarIcon } from "./Accordion.interface";
import { IBaseProps } from "../../types/common";
import { HeroTitle } from "../Typography/Typography";
import { IHeroTitleProps } from "../Typography/Typography.interface";

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps & IBoxProps>> = styled(Box)(
    ({ theme: { colors } }) => ({
        backgroundColor: colors.black
    })
)

export const AccordionTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.accent1, 
        wordSpacing: '100vw', 
    })
)


export const ArrowIcon: React.FC<React.PropsWithChildren<IAvatarIcon>> = styled(Box)(
    ({ isActive }) => ({
        transition: 'transform 0.3s ease',
        transform: isActive ? 'rotate(180deg)' : 'rotate(0)'
    })
)