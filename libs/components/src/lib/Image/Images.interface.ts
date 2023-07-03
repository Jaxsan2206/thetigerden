import { ImageProps as NextImageProps } from "next/image";


export interface INextImage extends NextImageProps {
    type: string; 
}