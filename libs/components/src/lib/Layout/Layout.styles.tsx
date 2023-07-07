import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";
import { system } from "styled-system";
import { Scale } from 'styled-system'
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { ColumnScale } from "./Layout.interface";


export const StyledColumn: React.FC<React.PropsWithChildren<IBoxProps>>= styled(Box)(
    system({
        width: {
            property: 'width', 
            transform: (value: ColumnScale, scale?: Scale) => (
                value !== null ? `${(scale![value] as number) * 100}%` : null 
            ), 
            defaultScale: [
                0, 
                1 / 12, 
                2 / 12, 
                3 / 12, 
                4 / 12, 
                5 / 12, 
                6 / 12, 
                7 / 12, 
                8 / 12, 
                9 / 12, 
                10 / 12, 
                11 / 12, 
                12 / 12, 
            ]
        }
    })
)