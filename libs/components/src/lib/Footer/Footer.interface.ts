import { IImageProps } from "../../types/common";
import { IButtonProps } from "../Button/Button.interface";
import { ILinkProps } from "../Link/Link.interface";

interface FooterColumn {
    columnLabel: string; 
    links: ILinkProps[]; 
}

export interface IFooterProps {
    columns: FooterColumn[];
    image: IImageProps; 
    cta: IButtonProps; 
    youtube: string;
    instagram: string; 
    tiktok: string;
    facebook: string;
}