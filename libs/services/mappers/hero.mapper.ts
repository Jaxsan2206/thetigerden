import { IHeroProps } from "../../components/src/lib/Hero/Hero.interface"


const mapFrom = (content)=> {
    const { primaryHeading, secondaryHeading, backgroundVideo, backgroundImage, variant } = content.fields

    const heroProps: IHeroProps  = {
        primaryHeading: primaryHeading,
        secondaryHeading: secondaryHeading,
        video: backgroundVideo?.fields?.file?.url || null,
        image: {
            src: backgroundImage?.fields?.file?.url || null,
            alt: 'picture'
        },
        variant: variant
    }
    return heroProps
}

export default mapFrom; 