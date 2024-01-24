import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { AccordionTextContainerProps, IAvatarIcon } from "./Accordion.interface";
import { IBaseProps } from "../../types/common";
import { HeroTitle } from "../Typography/Typography";
import { IHeroTitleProps } from "../Typography/Typography.interface";
import React from "react";
import Icon from "../Icon/Icon";
import { IIconWrapperProps } from "../Icon/Icon.interface";

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps & IBoxProps>> = styled(Box)(
    ({ theme: { colors, space } }) => ({
        backgroundColor: colors.offblack,
        paddingTop: space.xlarge, 
        paddingBottom: space.xlarge
    })
)

export const AccordionTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingBottom: space.large, 
        color: colors.accent1, 
    })
)

export const AccordionItemsWrapper: React.FC<React.PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
    ({ theme: { colors }}) => ({
        flexDirection: 'column',
        color: colors.white
    })
)

export const ArrowIcon: React.FC<React.PropsWithChildren<IIconWrapperProps & { isActive: boolean }>> = styled(Icon)(
    ({ isActive }) => ({
        transition: 'transform 0.3s ease',
        transform: isActive ? 'rotate(180deg)' : 'rotate(0)'
    })
)

export const AccordionTextContainer: React.FC<React.PropsWithChildren<AccordionTextContainerProps>> = styled(Box)(
    ({ theme: { colors }, contentHeight }) => ({
        maxHeight: `${contentHeight}px`,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
        borderBottom: `1px solid ${colors.white}`
    })
)