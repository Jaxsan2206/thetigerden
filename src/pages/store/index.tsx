import { useQuery } from "react-query";
import Collections from "../../../libs/components/src/lib/Product/Filter/Collections/Collections";
import Filter from "../../../libs/components/src/lib/Product/Filter/Filter/Filter";
import {
  sorting,
} from "../../../libs/components/src/lib/Product/Filter/Filter/constants";
import Search from "../../../libs/components/src/lib/Product/Filter/Search/Search";
import {
  Column,
  Container,
  Grid,
} from "../../../libs/components/src/lib/Layout/Layout";

import ContentfulService from "../../../libs/services/contentful/contentful.service";
import Products from "../../../libs/components/src/lib/Product/Product";
import { PageTitle } from "../../../libs/components/src/lib/Typography/Typography";

export default function Store({ }) {
  const { isLoading, error, data } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch('/api/products').then(
        (res) => res.json(),
      ),
    refetchOnWindowFocus: false
  })
  
  return (
      
      !isLoading && (<Container>
        <Grid>
          <Column width={[12, null, 2]}>
            <Collections />
          </Column>
          <Column width={[12, null, 8]}>
            {Object.keys(data?.products).map( collection => (
              <>
              <PageTitle>{collection}</PageTitle>
              <Products products={data.products[collection]} />
              </>
            ))}
          </Column>
          <Column width={[12, null, 2]}>
            <Filter list={sorting} />
          </Column>
        </Grid>
      </Container>)

  );
}

export const getServerSideProps = async ({ query }: any) => {

  const contentfulService = new ContentfulService();
  const { headerProps, footerProps, content } = await contentfulService.getTemplateLandingPage('store/hello')
  
  return {
    props: {
      headerProps,
      content: content || null,
      footerProps
    },
  };
};
