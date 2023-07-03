import styled from "@emotion/styled";
import { IBaseProps } from "../../types/common";
import { variant } from "styled-system";
import { Box } from "../FlexBox/FlexBox";
import { IStyledButton } from "./Button.interface";

export const StyledButton: React.FC<React.PropsWithChildren<IBaseProps & IStyledButton>> = styled(Box)(
    {
        padding: '12px 24px', 
        gap: '10px ', 
        height: '48px', 
        outline: 'none', 
        border: 'none',
        borderRadius: '30px'
    }, 
    ({ theme: { colors }}) => (
        variant({
            variants: {
                primary: {
                    background: colors.accent1, 
                    color: colors.primary, 
                    ':hover': {
                        background: colors.accent2
                    }
                }, 
                secondary: {
                    background: colors.primary, 
                    color: colors.secondary, 
                    ':hover': {
                        background: colors.greydark, 
                        color: colors.primary
                    }
                }
            }
        })
    ), 
)