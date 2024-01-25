import { IPriceProps } from "../../components/src/lib/PriceCard/PriceCard";
import { IPriceGroupProps } from "../../components/src/lib/PriceCardGroup/PriceCardGroup.interface";

const mapFrom = (content: any)=> {
    const { title, priceCards } = content.fields
    const prices: IPriceProps[] = priceCards.map((price: any) => ({
        title: price.fields.title,
        headline: {
            price: price.fields.headlinePrice,
            unit: price.fields.unit,
            disclaimer: price.fields.disclaimer
        },
        copy: price.fields.copy,
        cta: {
            children: price.fields.buttonLabel,
            href: price.fields.buttonLink,
            variant: 'secondary'
        }
    }))
    const priceProps: IPriceGroupProps  = {
        title,
        prices
    }   
    return priceProps
}

export default mapFrom; 