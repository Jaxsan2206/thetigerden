import { ContentfulClientApi, EntryCollection, EntrySkeletonType, createClient } from "contentful";
import { Mapper } from "../mappers";
import { Content } from "../mappers/mappers";

class ContentfulService {
    client: ContentfulClientApi<undefined>;
    mapper: Mapper; 

    constructor(){
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID as string,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
        });
        this.mapper = new Mapper();
    }

    async getTemplateHomePage(){
        const response = await this.client.getEntries({
            content_type: 'templateLandingPage',
            'fields.homepage': 'true',
            include: 10
        });
        const { headerProps, footerProps } = this.getLayout(response);
        return { headerProps, footerProps, content: response.items[0].fields.content }
    }

    async getTemplateLandingPage(slug: string){
        const response = await this.client.getEntries({
            content_type: 'templateLandingPage',
            'fields.slug[in]': slug,
            include: 10
        });
        const { headerProps, footerProps } = this.getLayout(response);
        return { headerProps, footerProps, content: response?.items?.[0]?.fields?.content }
    }

    getLayout(response: EntryCollection<EntrySkeletonType, undefined, string>){
        const { header, footer } = response.items[0].fields
        const mapperConfig = this.mapper.getMapperConfiguration();
        const headerProps = mapperConfig.header.mapFrom(header as Content)
        const footerProps = mapperConfig.footer.mapFrom(footer as Content)
        return {
            headerProps, 
            footerProps
        }
    }
}


export default ContentfulService; 