import { Entry } from "contentful";
import { IGroupProps } from "../../components/src/lib/Group/Group";
import Mapper from "./mappers";

const mapFrom = (content: any): any => {
    const { title, content: components, componentsPerRow } = content?.fields;

    const childProps = components.map((component: Entry) => {
        // console.log('component', component)
        const contentType = component.sys.contentType.sys.id
        // const mappers = new Mapper();
        // const mapperConfig = mappers.getMapperConfiguration()
        const componentProps = {
            title: component.fields.title,
            headline: {
                price: component.fields.headlinePrice,
                unit: component.fields.unit,
                disclaimer: component.fields.disclaimer
            },
            copy: component.fields.copy,
            cta: {
                children: component.fields.buttonLabel,
                href: component.fields.buttonLink,
                variant: 'secondary'
            }
        }
        return { ...componentProps, contentType: contentType }
    })

    return {
        title: title, 
        componentsPerRow: componentsPerRow,
        content: childProps
    }
}

export default mapFrom; 