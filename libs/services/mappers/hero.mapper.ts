import { IHeroProps } from "../../components/src/lib/Hero/Hero.interface"


const mapFrom = (content: any)=> {
    const { primaryHeading, secondaryHeading, backgroundVideo, backgroundImage, variant } = content?.fields
    const heroProps: IHeroProps  = {
        primaryHeading: primaryHeading || '',
        secondaryHeading: secondaryHeading || '',
        video: backgroundVideo?.fields?.file?.url || '',
        image: {
            src: backgroundImage?.fields?.file?.url || '',
            alt: backgroundImage?.fields?.title || ''
        },
        variant: variant
    }
    return heroProps
}

export default mapFrom; 