import React from "react";
import { Column, Grid } from "../Layout/Layout";
import Image from "../Image/Image";
import NextLink from "../Link/Link";
import { Box } from "../FlexBox/FlexBox";

const Products: React.FC<any> = ({ products }) => {
  console.log(products);
  return (
    <Grid>
      {products.map((product) => (
        <Column width={[12, null, 4, null]}>
          <Box display={"absolute"}>
            <NextLink href={`/product/${product.handle}`}>
              <Image src={product.featuredImage.url} />
            </NextLink>
            <Box display={"relative"}>
                {product.title} 
                {`${new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: product.priceRange.maxVariantPrice.currencyCode,
                  currencyDisplay: "narrowSymbol",
                }).format(parseFloat(product.priceRange.maxVariantPrice.amount))}`}
            </Box>
          </Box>
        </Column>
      ))}
    </Grid>
  );
};

export default Products;
