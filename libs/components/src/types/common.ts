import { ITheme } from "../styles/theme";

export type Variant = 'primary' | 'secondary' | 'tertiary'; 

export type TextSize = 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'; 

export interface IBaseProps {
    theme?: ITheme; 
}; 

export interface IImageProps {
    src: string; 
    alt: string; 
    type?: string; 
    width?: string | number; 
    height?: string | number; 
}; 

export interface IButtonProps {
    label: string; 
    url: string; 
    variant: Variant; 
}