export interface IBreakpointsThemeObj extends Array<string>{
    default?: string; 
    small?: string; 
    medium?: string; 
    large?: string; 
    xlarge?: string; 
}
export const breakpoints: IBreakpointsThemeObj = ['576px', '768px', '992px', '1200px'];

breakpoints['default'] = '0px';
breakpoints['small'] = breakpoints[0];
breakpoints['medium'] = breakpoints[1];
breakpoints['large'] = breakpoints[2];
breakpoints['xlarge'] = breakpoints[3]; 