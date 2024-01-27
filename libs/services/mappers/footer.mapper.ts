import { IFooterProps } from "../../components/src/lib/Footer/Footer.interface";


const mapFrom = (content: any )=> {
    const { footerLogo, navigationColumns, buttonLabel, buttonLink, instagram, tiktok, facebook, youtube } = content?.fields; 

    const footerProps: IFooterProps = {
        image: {
            src: footerLogo?.fields?.file?.url || '',
            alt: footerLogo?.fields?.title || ''
        },
        columns: navigationColumns?.map((column: any ) => {
            const links = column?.fields?.links?.map((link: any ) => ({
                label: link?.fields?.label || '',
                href: link?.fields?.link || ''
            }))
            return {
                columnLabel: column?.fields?.title || '',
                links: links
            }
        }),
        cta: {
            children: buttonLabel || '',
            href: buttonLink || '',
            variant: 'secondary'
        },
        instagram: instagram || '', 
        tiktok: tiktok || '', 
        facebook: facebook || '', 
        youtube: youtube || ''
    }

    return footerProps;
}

export default mapFrom; 