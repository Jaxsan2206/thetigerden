import { IButtonProps, IImageProps } from "../../types/common";
import { ILinkProps } from "../Link/Link.interface";

export interface IHeader {
    links: ILinkProps[];
    image: IImageProps; 
    cta: IButtonProps; 
}

export interface IMobileWrapper {
    contentHeight: number; 
    open: boolean; 
    ref: React.MutableRefObject<HTMLDivElement | null>
}