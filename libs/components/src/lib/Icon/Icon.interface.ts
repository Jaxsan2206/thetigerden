import { IBoxProps } from "../FlexBox/Flexbox.interface";

export interface IIconWrapperProps extends IBoxProps {
    name: string;
    color?: string;
    size?: string;
    minWidth?: string;
}

export interface IIconProps extends IBoxProps {
    color: string;
    size?: string;
}