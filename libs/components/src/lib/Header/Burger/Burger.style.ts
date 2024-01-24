import styled from "@emotion/styled"
import { PropsWithChildren } from "react"
import { IBaseProps } from "../../../types/common"
import { Box } from "../../FlexBox/FlexBox"
import { IBoxProps } from "../../FlexBox/Flexbox.interface"

export const StyledBurger:React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
    ({ theme: { mediaQueries }, open }) => ({
        minWidth: '40px', 
        minHeight: '40px', 
        display: 'none',
        
        [mediaQueries.untilXLarge]:{
            display: 'flex', 
            justifyContent: 'space-around', 
            flexFlow: 'column', 
            order: 1 
        },
 
        '>:nth-of-type(1)':{
            transform: open ? 'rotate(45deg)' : 'rotate(0)'
        }, 
        '>:nth-of-type(2)':{
            transform: open ? 'translateX(100%)' : 'translateX(0)', 
            opacity: open ? 0 : 1 
        }, 
        '>:nth-of-type(3)':{
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
