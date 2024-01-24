import styled from '@emotion/styled';
import { ComponentGenerator } from '../../libs/services/contentful/ComponentGenerator';
import ContentfulService from '../../libs/services/contentful/contentful.service';
import { Box } from '../../libs/components/src/lib/FlexBox/FlexBox';

const TemplateLandingPage = ({ content }) => {
  return content.map((el, i ) => <ComponentGenerator key={i} content = {el}/>)
};



export const getServerSideProps = async ({ query }: any) => {

  const contentfulService = new ContentfulService();
  const { headerProps, footerProps, content } = await contentfulService.getTemplateLandingPage(query.slug)
  return { 
    props: {
      headerProps,
      content: content || null,
      footerProps
   } 
  }
}

export default TemplateLandingPage;
