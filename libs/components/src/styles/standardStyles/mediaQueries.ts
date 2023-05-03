import breakpoints from "./breakpoints";

const mediaQueries = {
    untilSmall:` @media screen and (max-width: calc(${breakpoints.small } - 1px))`,
    small: `@media screen and (min-width: ${breakpoints.default})`,
    untilMedium: `@media screen and (max-width: calc(${breakpoints.medium} - 1px))`,
    medium:`@media screen and (min-width: ${breakpoints.small})`,
    untilLarge: `@media screen and (max-width: calc(${breakpoints.large} - 1px))`,
    large: `@media screen and (min-width: ${breakpoints.medium})`,
    untilXLarge: `@media screen and (max-width: calc(${breakpoints.xlarge} - 1px))`,
    xLarge: `@media screen and (min-width: ${breakpoints.large})`,
  };
  
  export default mediaQueries;