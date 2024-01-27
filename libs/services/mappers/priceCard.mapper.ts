import { IPriceProps } from "../../components/src/lib/PriceCard/PriceCard"

const mapFrom = (content: any)=> {
    const { title, headlinePrice, unit, disclaimer, copy, buttonLabel, buttonLink } = content.fields
    
    const priceCardProps: IPriceProps  = {
        title: title || '',
        headline: {
            price: headlinePrice || '',
            unit: unit || '',
            disclaimer: disclaimer || ''
        },
        copy: copy || '',
        cta: {
            children: buttonLabel || '',
            href: buttonLink || '',
            variant: 'secondary'
        }
    }
    return priceCardProps
}

export default mapFrom;