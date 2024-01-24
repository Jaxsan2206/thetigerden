import { IBaseProps } from "../../types/common";
import { IBoxProps } from "../FlexBox/Flexbox.interface";

export interface IAvatarIcon extends IBoxProps {
    isActive: boolean; 
}

export interface AccordionItem {
    title: string;
    copy: string; 
}

export interface IAccordionProps {
    title: string; 
    items: AccordionItem[];
}

export interface AccordionTextContainerProps extends IBoxProps, IBaseProps {
    contentHeight: number;
}