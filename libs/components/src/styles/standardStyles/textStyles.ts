export interface ITextSize {
  [key: string]: {
    fontSize: string; 
    lineHeight: string; 
  }
}

export const textSize: ITextSize = {
  xxlarge: {
    fontSize: '2.8rem',
    lineHeight: '3.8rem',
  },
  xlarge: {
    fontSize: '2.4rem',
    lineHeight: '3.2rem',
  },
  large: {
    fontSize: '2rem',
    lineHeight: '2.8rem',
  },
  medium: {
    fontSize: '1.8rem',
    lineHeight: '2.4rem',
  },
  small: {
    fontSize: '1.6rem',
    lineHeight: '2.2rem',
  },
  xsmall: {
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
  },
  xxsmall: {
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
  },
};

export const pageTitleSize: ITextSize = {
  large: {
    fontSize: '3.2rem',
    lineHeight: '4rem',
  },
  medium: {
    fontSize: '2.8rem',
    lineHeight: '3.6rem',
  },
  small: {
    fontSize: '2.4rem',
    lineHeight: '3.2rem',
  },
  xsmall: {
    fontSize: '2rem',
    lineHeight: '2.8rem',
  },
  xxsmall: {
    fontSize: '1.4rem',
    lineHeight: '2.2rem',
  },
}

export const heroTitleSize: ITextSize = {
  xlarge: {
    fontSize: '6.8rem',
    lineHeight: '7.6rem',
  },
  large: {
    fontSize: '5.6rem',
    lineHeight: '6.4rem',
  },
  medium: {
    fontSize: '4.8rem',
    lineHeight: '5.6rem',
  },
  small: {
    fontSize: '4rem',
    lineHeight: '4.8rem',
  },
  xsmall: {
    fontSize: '3.2rem',
    lineHeight: '4.8rem',
  },
}; 

export interface ITextStyles {
  textSize: ITextSize; 
  pageTitleSize: ITextSize;
  heroTitleSize: ITextSize;
}

const textStyles: ITextStyles = {
  textSize, 
  pageTitleSize, 
  heroTitleSize
}

export default textStyles; 