import styled from "@emotion/styled";
import { variant } from "styled-system";
import { Box, Flex } from "../FlexBox/FlexBox";
import { withLink } from "../Link/withLink";
import { Text } from "../Typography/Typography";
import { IBaseProps, Variant } from "../../types/common";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { ILinkProps } from "../Link/Link.interface";
import { ITextProps } from "../Typography/Typography.interface";

interface IWrapperProps extends IBaseProps, IBoxProps {
    variant: Variant
}

export const Wrapper: React.FC<React.PropsWithChildren<IWrapperProps>> = styled(Box)(
    {   
        all: 'unset',
        border: '2px solid transparent',
        borderRadius: '30px',
        overflow: 'hidden',
        position: 'relative',
        textDecoration: 'none',
        transition: '.2s transform ease-in-out',
        willChange: 'transform',
        zIndex: 0, 
        display: 'inline-block',
        width: 'fit-content',
        '&::after' : {
            borderRadius: '30px',
            content: '""',
            display: 'block',
            height: '100%',
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(-100%, 0) rotate(10deg)',
            transformOrigin: 'top left',
            transition: '.2s transform ease-out',
            willChange: 'transform',
            zIndex: -1,
        },
    
        '&:hover::after' : {
            transform: 'translate(0, 0)'
        },
    
        '&:hover': {
            border: '2px solid transparent',
            transform: 'scale(1.05)',
            willChange: 'transform',
        }
    },
    ({ theme: { colors }}) => (
        variant({
            variants: {
                primary: {
                    backgroundColor: colors.accent1,  
                    color: colors.black,
                    '&::after' : {
                        backgroundColor: colors.offblack,  
                    },
                    '&:hover': {
                        'a' : {
                            color: colors.accent1,
                        },
                        'svg':{
                            stroke: colors.accent1    
                        }
                    }
                },
                secondary: {
                    backgroundColor: colors.offblack,  
                    'a' : {
                        color: colors.white,
                    },
                    'p' : {
                        color: colors.white,
                    },
                    'svg':{
                        stroke: colors.white    
                    },
                    '&::after' : {
                        backgroundColor: colors.accent1,  
                    },
                    '&:hover': {
                        'a' : {
                            color: colors.black,
                        },
                        'p' : {
                            color: colors.black,
                        },
                        'svg':{
                            stroke: colors.black    
                        }
                    }
                }
            }
        })
    ), 
)

export const Container: React.FC<React.PropsWithChildren<IBaseProps & IBoxProps & ILinkProps>> = styled(withLink(Box))(
    {
        all: 'unset',
        borderRadius: '30px',
        font: 'inherit',
    }
)

export const Content: React.FC<React.PropsWithChildren<IBaseProps & IBoxProps & { isIconButton: boolean }>> = styled(Flex)(
    ({ theme: { space }, isIconButton }) => ({
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${space.medium} ${isIconButton ? space.medium : space.large}`, 
    })
)

export const ButtonLabel: React.FC<React.PropsWithChildren<ITextProps>> = styled(Text)({
        fontWeight: 500
    }
)
