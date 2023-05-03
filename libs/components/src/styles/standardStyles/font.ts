import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', preload: false })

export interface IFontsThemeObj {
    heading: string; 
    secondaryHeading: string; 
    body: string;
}; 

export const fonts: IFontsThemeObj = {
    heading: poppins.style.fontFamily, 
    secondaryHeading: poppins.style.fontFamily, 
    body: poppins.style.fontFamily 
}; 