interface IColorThemeObj {
    [key : string] : string; 
}

const baseColors = {
    white: '#FFFFFF',
    offwhite: '#F5F5F5',
    greylight: '#ECECEC',
    greymid: '#D2D2D2',
    greydark: '#707070',
    offblack: '#262626',
    black: '#000000',
    success: '#008810',
    error: '#EB0023',
    none: 'transparent',
    initial: 'initial',
};

export const colors: IColorThemeObj = {
    ...baseColors, 
    primary: 'green', 
    secondary: 'purple', 
    accent1: 'yellow', 
}