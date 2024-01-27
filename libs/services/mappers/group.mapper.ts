import Mapper, { Content } from "./mappers";

const mapFrom = (content: any): any => {
    const { title, content: components, componentsPerRow, buttonUrl, buttonLabel } = content?.fields;
    const childProps = components.map((component: Content) => {
        const contentType = component?.sys?.contentType?.sys?.id
        const mappers = new Mapper();
        const mapperConfig = mappers.getMapperConfiguration()
        const componentProps = mapperConfig?.[contentType]?.mapFrom(component)
        return { ...componentProps, contentType: contentType }
    })
    return {
        title: title || '', 
        componentsPerRow: componentsPerRow || null,
        content: childProps || [],
        cta: {
            children: buttonLabel || '', 
            href: buttonUrl || '',
            variant: 'secondary'
        }
    }
}

export default mapFrom; 