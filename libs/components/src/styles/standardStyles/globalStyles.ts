import { SerializedStyles, css } from '@emotion/react'; 
import { fonts } from './font';
import { textStyles } from './textStyles';
import { colors } from './colors';

const global: { [ key: string]: string } = {
    color: 'black', 
    backgroundColor: 'none',
    linkColor: 'black', 
    hoverLinkColor: 'blue'
}

export const globalStyles: SerializedStyles = css(
    {
        // Setting this to border-box allows the padding and element borders to be included in the height and width
        '*':{
            boxSizing: 'border-box'
        }, 

        html: {
            // Setting 1 rem = 10 px 
            fontSize: '62.5%',
            height: '100%'
        }, 

        img: {
            maxWidth: '100%'
        }, 

        body: {
            fontFamily: fonts.body, 
            fontSize: textStyles.small.fontSize, 
            color: global.color, 
            backgroundColor: colors[global.backgroundColor]
        }, 

        'a, a:hover, a:focus, a:active, a:focus:active':{
            textDecoration: 'none', 
            color: colors[global.linkColor], 
            ':visited':{
                color: colors[global.linkColor]
            }, 
            ':hover': {
                // textDecoration: 'none,'
                color: colors[global.hoverLinkColor]
            }, 
            ':active':{
                // textDecoration: 'none',
                color: colors[global.linkColor]
            }
        }
    }
)
