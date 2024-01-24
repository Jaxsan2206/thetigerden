import { IFooterProps } from "../../components/src/lib/Footer/Footer.interface";


const mapFrom = (content)=> {
    const { footerLogo, navigationColumns, buttonLabel, buttonLink, instagram, tiktok, facebook, youtube } = content.fields; 

    const footerProps: IFooterProps = {
        image: {
            src: footerLogo.fields.file.url,
            alt: footerLogo.fields.title
        },
        columns: navigationColumns.map(column => {
            const links = column.fields.links.map(link => ({
                label: link.fields.label,
                href: link.fields.link || null 
            }))
            return {
                columnLabel: column.fields.title,
                links: links
            }
        }),
        cta: {
            label: buttonLabel,
            url: buttonLink,
            variant: 'secondary'
        },
        instagram, 
        tiktok, 
        facebook, 
        youtube
    }

    return footerProps;
}

export default mapFrom; 