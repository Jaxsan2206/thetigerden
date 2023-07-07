import { IButtonProps, IImageProps } from "../../types/common";

export interface IHeader {
    links: string[];
    image: IImageProps; 
    cta: IButtonProps; 
}