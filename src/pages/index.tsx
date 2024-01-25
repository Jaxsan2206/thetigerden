import ContentfulService from "../../libs/services/contentful/contentful.service";
import { ComponentGenerator } from "../../libs/services/contentful/ComponentGenerator";
import { Content, IPageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";

const Home: NextPage<IPageProps> = ({ content }) => {
  return (
    <>
      {content.map((el: Content, i: number) => (
        <ComponentGenerator key={i} content={el} />
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const contentfulService = new ContentfulService();
  const { headerProps, footerProps, content } =
  await contentfulService.getTemplateHomePage();
  return {
    props: {
      headerProps,
      content: content || null,
      footerProps,
    },
  };
};

export default Home;
