import { MutableRefObject } from 'react';
import {
    SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps,
  } from 'styled-system';
  
  export type OmittedProps = 
  | 'color'
  | 'height'
  | 'size'
  | 'width'
  
  //  Extends predefined interfaces to allow a range of styling props to be passed. 
  export interface IStyledProps extends SpaceProps, LayoutProps, TypographyProps, ColorProps, FlexboxProps {}
  
  //  Extends from IStyledProps and React.AllHTMLAttributes<HTMLAllCollection> except for some keys defined in OmittedProps
  export interface IBoxProps extends IStyledProps, Omit<React.AllHTMLAttributes<HTMLAllCollection>, OmittedProps> {
    ref?: MutableRefObject<HTMLDivElement | null>;
  }