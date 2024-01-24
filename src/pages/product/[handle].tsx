import { useQuery } from "react-query";
import AddToCart from "../../../libs/components/src/lib/AddToCart/AddToCart";
import { Gallery } from "../../../libs/components/src/lib/Product/Gallery/Gallery";
import {
  Column,
  Container,
  Grid,
} from "../../../libs/components/src/lib/Layout/Layout";
import { VariantSelector } from "../../../libs/components/src/lib/Product/VariantSelector/VariantSelector";
import ContentfulService from "../../../libs/services/contentful/contentful.service";
import { useRouter } from "next/router";
import { Text } from "../../../libs/components/src/lib/Typography/Typography";

export default function Store({}) {
  const { query } = useRouter();

  const { isLoading, error, data } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(`/api/product?search=${query.handle}`).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });
  const product = data?.product?.[0];

  return (
    !isLoading && (
      <Container>
        <Grid>
          <Column width={[12, null, 8, null]}>
            <Gallery images={product?.images}></Gallery>
          </Column>


          <Column width={[12, null, 4, null]}>

            <Text size={'xlarge'}>
            {product?.title}
            </Text>
            <Text>
            {`${new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: product?.priceRange?.maxVariantPrice?.currencyCode,
              currencyDisplay: "narrowSymbol",
            }).format(parseFloat(product?.priceRange?.maxVariantPrice?.amount))}`}
            </Text>

            <VariantSelector
              options={product?.options}
              variants={product?.variants}
            />

            {product?.description}

            <AddToCart
              variants={product.variants}
              availableForSale={true}
            ></AddToCart>

          </Column>


        </Grid>
      </Container>
    )
  );
}

export const getServerSideProps = async ({ query }: any) => {
  const contentfulService = new ContentfulService();
  const { headerProps, footerProps, content } =
    await contentfulService.getTemplateLandingPage("store/hello");

  return {
    props: {
      headerProps,
      content: content || null,
      footerProps,
    },
  };
};
