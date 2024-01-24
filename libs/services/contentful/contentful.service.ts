import { ContentfulClientApi, createClient } from "contentful";
import { Mapper } from "../mappers";


class ContentfulService {
    client: ContentfulClientApi;
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
        const { headerProps, footerProps } = this.getLayout(response.items[0].fields);
        return { headerProps, footerProps, content: response.items[0].fields.content }
    }

    async getTemplateLandingPage(slug){
        const response = await this.client.getEntries({
            content_type: 'templateLandingPage',
            'fields.slug[in]': slug,
            include: 10
        });
        const { headerProps, footerProps } = this.getLayout(response.items[0].fields);
        return { headerProps, footerProps, content: response.items[0].fields.content }
    }


    getLayout(data){
        const { header, footer } = data
        const headerProps = this.mapper.mapperConfiguration.header.mapfrom(header)
        const footerProps = this.mapper.mapperConfiguration.footer.mapfrom(footer)
        return {
            headerProps, 
            footerProps
        }
    }
}


export default ContentfulService; 