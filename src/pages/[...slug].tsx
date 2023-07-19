import Hero from "../../libs/components/src/lib/Hero/Hero";
import Header from "../../libs/components/src/lib/Header/Header";
import Announcement from "../../libs/components/src/lib/Announcement/Announcement";
import { IHeader } from "../../libs/components/src/lib/Header/Header.interface";
import styled from "@emotion/styled";
import { IBaseProps } from "../../libs/components/src/types/common";
import { GetServerSideProps } from "next/types";

import { createClient } from 'contentful';
import ComponentGenerator from "../../libs/services/contentful/ComponentGenerator";



const FeaturePanelComponent = ({ content }) => {
  return content.map(el => <ComponentGenerator content = {el}/>)
};

export const getServerSideProps = async ({ query }: any) => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({
    content_type: 'templateLandingPage',
    'fields.slug[in]': query.slug.join('/'),
  });


  return { 
    props: {
      content: response.items[0].fields.content
   } 
  }
}

export default FeaturePanelComponent;
