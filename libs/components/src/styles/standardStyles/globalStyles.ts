import { SerializedStyles, css } from '@emotion/react'; 
import { fonts } from './font';
import textStyles from './textStyles';
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
        // https://www.w3schools.com/css/css3_box-sizing.asp
        '*':{
            boxSizing: 'border-box'
        }, 

        html: {
            // Setting 1 rem = 10 px
            // https://mcro.tech/blog/basic-tips-to-create-responsive-website/#:~:text=In%20order%20to%20easily%20use,of%20the%20default%20font%2Dsize. 
            fontSize: '62.5%',
            height: '100%'
        }, 

        img: {
            maxWidth: '100%'
        }, 

        body: {
            fontFamily: fonts.body, 
            fontSize: textStyles.textSize.small.fontSize, 
            color: global.color, 
            backgroundColor: colors[global.backgroundColor], 
            margin: 0
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
