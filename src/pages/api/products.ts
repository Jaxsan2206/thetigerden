// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "contentful";
import type { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({
    content_type: "productCollection",
    include: 10,
  });

  const productCategories = {};

  const getProductOptions = (product) => {
    return product.fields.options.map((option) => ({
      id: option.sys.id,
      name: option.fields.title,
      values: option.fields.values.split(","),
    }));
  };

  const getProductVariants = (product) => {
    return product.fields.productVariants.map((variant) => ({
      id: variant.sys.id,
      title: variant.fields.title,
      availableForSale: variant.fields.availableForSale,
      price: {
        currencyCode: variant.fields.currencyCode,
        amount: variant.fields.price,
      },
      selectedOptions: variant.fields.selectedOptions.map((selectedOption) => ({
        id: selectedOption.sys.id,
        name: selectedOption.fields.title,
        value: selectedOption.fields.values,
      })),
    }));
  };

  const getPriceRange = (product) => {
    const prices = product.fields.productVariants.map(
      (variant) => variant.fields.price
    );
    return {
      maxVariantPrice: {
        currencyCode: product.fields.productVariants[0].fields.currencyCode,
        amount: Math.max(...prices),
      },
      minVariantPrice: {
        currencyCode: product.fields.productVariants[0].fields.currencyCode,
        amount: Math.min(...prices),
      },
    };
  };

  const getImages = (product) => {
    return product.fields.images.map(image => ({
        url: image.fields.file.url,
        altText: image.fields.title,
        width: image.fields.file.details.image.width,
        height: image.fields.file.details.image.height,
    }))
  }

  for (let i = 0; i < response.items.length; i++) {
    const collectionName = response.items[i].fields["collectionName"];
    if (!productCategories[collectionName]) {
      productCategories[collectionName] = response.items[i].fields.products.map(
        (product) => ({
          id: product.sys.id,
          availableForSale: product.fields.availableForSale,
          title: product.fields.title,
          handle: product.fields.handle,
          description: product.fields.description,
          options: getProductOptions(product),
          variants: getProductVariants(product),
          priceRange: getPriceRange(product),
          images: getImages(product),
          featuredImage: {
            url: product.fields.images[0].fields.file.url,
            altText: product.fields.images[0].fields.title,
            width: product.fields.images[0].fields.file.details.image.width,
            height: product.fields.images[0].fields.file.details.image.height
        }
        })
      );
    }
  }

  res.status(200).json({ products: productCategories });
}
