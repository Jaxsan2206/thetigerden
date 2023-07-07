import { Variant, TextSize } from '../../types/common';
import { IBoxProps } from '../FlexBox/Flexbox.interface';

export type HeroTitleSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export interface IHeroTitleProps extends IBoxProps {
  /**
   * HTML tag that the component takes
   */
  as?: string;
  /**
   * Hero title size
   */
  size?: HeroTitleSize | HeroTitleSize[]
  /**
   * Apply shadow style to text
   */
  shadow?: boolean;
  /**
   * Font variant
   */
  variant?: Variant;
}

export type PageTitleSize = 
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall'
  | 'xxsmall';

export interface IPageTitleProps extends IBoxProps {
  /**
   * HTML tag that the component takes
   */
  as?: string;
  /**
   * Page title size
   */
  size?: PageTitleSize | PageTitleSize[]
  /**
   * Font variant
   */
  variant?: Variant;
}

export interface ITextProps extends IBoxProps {
  /**
   * HTML tag that the component takes
   */
  as?: string;
  /**
   * Text size
   */
  size?: TextSize | TextSize[];
}

interface IBaseTitleProps {
  secondaryFontWeight?: string;
}

export interface ITypographyObj {
  heroTitle?: IBoxProps & IBaseTitleProps;
  pageTitle?: IBoxProps & IBaseTitleProps;
  body?: IBoxProps;
}