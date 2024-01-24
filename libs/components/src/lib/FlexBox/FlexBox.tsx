import styled from "@emotion/styled";
import { IBoxProps } from "./Flexbox.interface";
import {
    compose, 
    space, 
    layout, 
    typography, 
    color, 
    flexbox
} from 'styled-system';

export const Box: React.FC<React.PropsWithChildren<IBoxProps>> = styled('div')(
    {
        boxSizing: 'border-box',
        margin: 0, 
        minWidth: 0,
    }, 
    //  The css prop is a special prop that allows developers to pass in custom styles to the component. By using this function, we can ensure that any custom styles passed in via the css prop are applied to the component along with the default styles. 
    props => props.css, 
    // We are passing in the space, layout, typography, color, and flexbox functions, which are all part of the styled-system library. These functions map props to their corresponding CSS properties, allowing us to create components that can be styled with a wide range of props. Notice these are the corresponding functions to the types we imported in Flexbox.interface.ts. 
    compose(
        space, 
        layout, 
        typography, 
        color, 
        flexbox
    )
)

export const Flex: React.FC<React.PropsWithChildren<IBoxProps>>  = styled(Box)({
    display: 'flex'
})