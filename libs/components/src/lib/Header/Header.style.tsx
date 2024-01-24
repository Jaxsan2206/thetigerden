import styled from "@emotion/styled";
import { Box, Flex } from "../FlexBox/FlexBox";
import { PropsWithChildren } from "react";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { ILinkProps } from "../Link/Link.interface";
import NextLink from "../Link/Link";
import { IBaseProps, IImageProps } from "../../types/common";
import { IMobileWrapper } from "./Header.interface";
import Image from "../Image/Image";
import { withLink } from "../Link/withLink";

export const Wrapper:React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
    ({ theme: { colors } }) => ({
        backgroundColor: colors.offwhite,
    })
)

export const DesktopContainer:React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Flex)(
    ({ theme: { space } }) => ({
        justifyContent: 'space-between', 
        alignItems: 'center', 
        minHeight: '80px', 
        paddingLeft: space.large, 
        paddingRight: space.large ,
    })
)

export const NavLink:React.FC<PropsWithChildren<ILinkProps & IBoxProps &IBaseProps>> = styled(NextLink)(
    ({ theme: { colors } }) => ({
        // TODO: Move animation to NextLink component
        '&:hover': {
            color: `${colors.accent1} !important`,
            textDecoration: 'underline'
        }
    })
)

export const LinksContainer:React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Flex)(
    ({ theme: { space }} ) => ({
        position:'absolute',
        transform: 'translateX(-50%)', 
        left: '50%',
        gap: space.base
    })
)

export const MobileContainer:React.FC<PropsWithChildren<IMobileWrapper>> = styled(Flex)(
    ({ open, contentHeight }) => ({
        flexDirection: 'column', 
        maxHeight: open ? `${contentHeight}px` : '0px',
        transition: "max-height 0.3s ease-out",
        overflow: "hidden",
    })
)

export const LogoContainer:React.FC<PropsWithChildren<IBaseProps>> = styled(Flex)(
    ({ theme: { mediaQueries, space } }) => ({
        position: 'relative', 
        width: 'auto', 
        height: '100%',
       [mediaQueries.untilXLarge]:{
        order: 2, 
        width: '100%',
       }
    })
)

export const CartContainer:React.FC<PropsWithChildren<IBaseProps>> = styled(Flex)(
    ({ theme: { mediaQueries } }) => ({
        minWidth: 'fit-content',
       [mediaQueries.untilXLarge]:{
        order: 3
       }
    })
)

export const Logo:React.FC<PropsWithChildren<IBaseProps & IImageProps & ILinkProps>> = styled(withLink(Image))(
    ({ theme: { mediaQueries } }) => ({
        margin:'auto',
        
       [mediaQueries.untilXLarge]:{
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
       }
    })
)