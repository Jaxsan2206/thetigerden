import styled from "@emotion/styled";
import { Box, Flex } from "../FlexBox/FlexBox";
import { PropsWithChildren } from "react";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { ILinkProps } from "../Link/Link.interface";
import NextLink from "../Link/Link";
import { IBaseProps } from "../../types/common";

export const Wrapper:React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Flex)(
    ({ theme: { space } }) => ({
        justifyContent: 'space-between', 
        alignItems: 'center', 
        minHeight: '80px', 
        paddingLeft: space.large, 
        paddingRight: space.large 
    })
)

export const NavLink:React.FC<PropsWithChildren<ILinkProps & IBoxProps &IBaseProps>> = styled(NextLink)(
    ({ theme: { space } }) => ({
        // TODO: Remove left padding on the first navLink
        paddingLeft: space.base
    })
)

export const ImageWrapper:React.FC<PropsWithChildren<IBoxProps>> = styled(Box)({
    position:'absolute',
    transform: 'translateX(-50%)', 
    left: '50%'
})

