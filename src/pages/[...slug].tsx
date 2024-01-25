import { Content, IPageProps } from '@/types';
import { ComponentGenerator } from '../../libs/services/contentful/ComponentGenerator';
import ContentfulService from '../../libs/services/contentful/contentful.service';
import { GetServerSideProps, NextPage } from 'next';

const TemplateLandingPage: NextPage<IPageProps> = ({ content }) => {
  return (
    <>
      {content.map((el: Content, i: number) => (
        <ComponentGenerator key={i} content={el} />
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query } ) => {
  const contentfulService = new ContentfulService();
  const { headerProps, footerProps, content } = await contentfulService.getTemplateLandingPage(query.slug as string)
  return { 
    props: {
      headerProps,
      content: content || null,
      footerProps
   } 
  }
}

export default TemplateLandingPage;
