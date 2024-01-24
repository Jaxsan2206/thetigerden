import { IImageProps } from "../../types/common";
import { ILinkProps } from "../Link/Link.interface";

export interface IHeaderProps {
    links: ILinkProps[];
    desktopLogo: IImageProps; 
    mobileLogo: IImageProps;
    showCart: boolean;
}

export interface IMobileWrapper {
    contentHeight: number; 
    open: boolean; 
    ref: React.MutableRefObject<HTMLDivElement | null>
}