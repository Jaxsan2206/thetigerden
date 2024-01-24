import ContentfulService from "../../libs/services/contentful/contentful.service";
import { ComponentGenerator } from "../../libs/services/contentful/ComponentGenerator";

const Home = ({ content }) => {
  return content.map((el, i ) => <ComponentGenerator key={i} content = {el}/>)
};

export const getServerSideProps = async () => {
  const contentfulService = new ContentfulService();
  const { headerProps, footerProps, content } = await contentfulService.getTemplateHomePage()
  return { 
    props: {
      headerProps,
      content: content || null,
      footerProps
   } 
  }
}

export default Home