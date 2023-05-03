import { ITheme } from "../styles/theme";

export type Variant = 'primary' | 'secondary' | 'tertiary'; 

export type TextSize = 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'; 

export interface IBaseProps {
    theme?: ITheme; 
}