import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";
import React from "react";
import { IBaseProps } from "../../types/common";

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: { colors, space }}) => ({
        backgroundColor: colors.accent1, 
        width: '100%',
        textAlign: 'center', 
        padding: `${space.medium} ${space.large}`
    })
)