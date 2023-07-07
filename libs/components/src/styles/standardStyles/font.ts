//  https://nextjs.org/docs/basic-features/font-optimization
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100','200', '300', '400','500', '900'], preload: false })

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