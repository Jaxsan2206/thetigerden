import { IBreakpointsThemeObj, breakpoints } from "./standardStyles/breakpoints";
import { IMediaQueries, mediaQueries } from "./standardStyles/mediaQueries";
import { ISpace, space } from "./standardStyles/space";
import textStyles, { ITextStyles } from "./standardStyles/textStyles";
import { IColorThemeObj, colors } from "./standardStyles/colors";

export interface ITheme {
    colors: IColorThemeObj; 
    mediaQueries: IMediaQueries; 
    breakpoints: IBreakpointsThemeObj; 
    space: ISpace; 
    textStyles: ITextStyles; 
}

const theme: ITheme = {
    colors,
    breakpoints, 
    mediaQueries, 
    space, 
    textStyles
}

export default theme;