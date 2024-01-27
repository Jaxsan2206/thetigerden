import { IAccordionProps } from "../../components/src/lib/Accordion/Accordion.interface";

const mapFrom = (content: any)=> {
    const { title, accordionItems } = content.fields
    const accordionProps: IAccordionProps = {
        title: title || '',
        items: accordionItems.map((item: any)=> ({
            title: item?.fields?.title || '',
            copy: item?.fields?.copy || '',
        }))
    }
    return accordionProps; 
}

export default mapFrom; 