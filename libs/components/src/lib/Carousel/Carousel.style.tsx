import React from "react";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IBaseProps } from "../../types/common";
import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";
import { IContainerProps } from "../Layout/Layout.interface";
import { Container } from "../Layout/Layout";

export const TestimonialContainer: React.FC<IContainerProps & IBaseProps>=styled(Container)(
    ({theme: {space}}) => ({
        padding: space.large
    })
)

export const TestimonialBox: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {colors}}) => ({
        backgroundColor: colors.greymid,
    })
)