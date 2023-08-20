import styled from "@emotion/styled";
import { Box, Flex } from "../FlexBox/FlexBox";
import { PropsWithChildren } from "react";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { ILinkProps } from "../Link/Link.interface";
import NextLink from "../Link/Link";
import { IBaseProps, IButtonProps, IImageProps } from "../../types/common";
import { IMobileWrapper } from "./Header.interface";
import ButtonWithLink from "../Button/Button";
import Button from "../Button/Button";
import Image from "../Image/Image";

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

export const LinksWrapper:React.FC<PropsWithChildren<IBoxProps>> = styled(Flex)(
    {
        // TODO: Remove left padding on the first navLink
        position:'absolute',
        transform: 'translateX(-50%)', 
        left: '50%',

    
    }
)

export const MobileWrapper:React.FC<PropsWithChildren<IMobileWrapper>> = styled(Flex)(
    ({ open, contentHeight }) => ({
        flexDirection: 'column', 
        maxHeight: open ? `${contentHeight}px` : '0px',
        transition: "max-height 0.3s ease-out",
        overflow: "hidden",
    })
)



export const StyledBurger:React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
    ({ theme: { mediaQueries }, open }) => ({
        // position: 'relative', 
        width: '40px', 
        height: '40px', 
        // top: '15px', 
        // right: '20px', 
        display: 'none',
        
        
        [mediaQueries.untilXLarge]:{
            display: 'flex', 
            justifyContent: 'space-around', 
            flexFlow: 'column', 
            order: 1 
        },
 

        '>:nth-child(1)':{
            transform: open ? 'rotate(45deg)' : 'rotate(0)'
        }, 
        '>:nth-child(2)':{
            transform: open ? 'translateX(100%)' : 'translateX(0)', 
            opacity: open ? 0 : 1 
        }, 
        '>:nth-child(3)':{
            transform: open ? 'rotate(-45deg)' : 'rotate(0)' 
        }, 
    })
)


export const BurgerLines:React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
    { 

            width: '100%', 
            height: '3px', 
            backgroundColor: 'black', 
            borderRadius: '10px', 
            transformOrigin: '1px', 
            transition: 'all 0.3s linear'
    }
)


export const ImageContainer:React.FC<PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: { mediaQueries } }) => ({
        position: 'relative', 
        width: 'auto', 
        height: '100%', 
       [mediaQueries.untilXLarge]:{
        order: 2, 
        width: '100%',
       }
    })
)


export const CartWrapper:React.FC<PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: { mediaQueries } }) => ({

       [mediaQueries.untilXLarge]:{
        order: 3
       }
    })
)

export const Logo:React.FC<PropsWithChildren<IBaseProps & IImageProps>> = styled(Image)(
    ({ theme: { mediaQueries } }) => ({
       [mediaQueries.untilXLarge]:{
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
       }
    })
)
