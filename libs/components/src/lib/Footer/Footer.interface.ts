import { IButtonProps, IImageProps } from "../../types/common";
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