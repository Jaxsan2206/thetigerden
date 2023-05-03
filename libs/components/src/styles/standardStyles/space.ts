interface ISpaceThemeObj {
  [key: number | string ]: number; 
}
  
export const spaceNumbers: ISpaceThemeObj = {
  0: 0,
  1: 0.4,
  2: 0.8,
  3: 1.2,
  4: 1.6,
  5: 2.4,
  6: 3.2,
  7: 4.8,
  8: 7.2,
  9: 14.4,
};

spaceNumbers.none = spaceNumbers[0];
spaceNumbers.xsmall = spaceNumbers[1];
spaceNumbers.small = spaceNumbers[2];
spaceNumbers.medium = spaceNumbers[3];
spaceNumbers.base = spaceNumbers[4];
spaceNumbers.large = spaceNumbers[5];
spaceNumbers.xlarge = spaceNumbers[6];
spaceNumbers.xxlarge = spaceNumbers[7];
spaceNumbers.xxxlarge = spaceNumbers[8];
spaceNumbers.xxxxlarge = spaceNumbers[9];

export interface ISpace {
  [key: number]: string; 
  none: string; 
  xsmall: string; 
  small: string; 
  medium: string; 
  base: string; 
  large: string; 
  xlarge: string; 
  xxlarge: string; 
  xxxlarge: string; 
  xxxxlarge: string; 
}

export const space: ISpace = {
  0: `${spaceNumbers[0]}`,
  1: `${spaceNumbers[1]}rem`,
  2: `${spaceNumbers[2]}rem`,
  3: `${spaceNumbers[3]}rem`,
  4: `${spaceNumbers[4]}rem`,
  5: `${spaceNumbers[5]}rem`,
  6: `${spaceNumbers[6]}rem`,
  7: `${spaceNumbers[7]}rem`,
  8: `${spaceNumbers[8]}rem`,
  9: `${spaceNumbers[9]}rem`,
  none: `${spaceNumbers[0]}`, // 0px
  xsmall: `${spaceNumbers[1]}rem`, // 4px
  small: `${spaceNumbers[2]}rem`, // 8px
  medium: `${spaceNumbers[3]}rem`, // 12px
  base: `${spaceNumbers[4]}rem`, // 16px
  large: `${spaceNumbers[5]}rem`, // 24px
  xlarge: `${spaceNumbers[6]}rem`, // 32px
  xxlarge: `${spaceNumbers[7]}rem`, // 48px
  xxxlarge: `${spaceNumbers[8]}rem`, // 72px
  xxxxlarge: `${spaceNumbers[9]}rem`, // 144px
};