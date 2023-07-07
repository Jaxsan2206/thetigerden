import { IBoxProps } from "../FlexBox/Flexbox.interface";

export interface IContainerProps extends IBoxProps {
    fullWidth?: boolean; 
}

export interface IColumnProps extends IBoxProps {
}

export type ColumnScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; 