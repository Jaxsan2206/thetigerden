import { IHeader } from "../../components/src/lib/Header/Header.interface"


const mapFrom = (content)=> {
    const { headerLinks, desktopLogo, mobileLogo, showCart } = content.fields
    
    const headerProps: IHeader = {
        links: headerLinks.map(link => ({
            label: link.fields.label, 
            href: link.fields.link
        })), 
        desktopLogo: {
            src: desktopLogo.fields.file.url,
            alt: desktopLogo.fields.title
        },
        mobileLogo: {
            src: mobileLogo.fields.file.url,
            alt: mobileLogo.fields.title
        },
        showCart: showCart
    }
    return headerProps
}

export default mapFrom; 