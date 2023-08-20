export const products: Product[] = [
  {
    id: "1",
    availableForSale: true,
    title: "Acme Slip-On Shoes",
    handle: "acme-slip-on-shoes",
    description: `Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up.'`,
    options: [
      {
        id: "1",
        name: "Colour",
        values: ["blue", "green"],
      },
      {
        id: "2",
        name: "Size",
        values: ["1", "1.5", "2"],
      },
   
    ],
    variants: [
      {
        id: "1",
        title: "Variant 1",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "1",
          },
          {
            name: "Colour",
            value: "blue",
          },
        ],
        price: {
          currencyCode: "GBP",
          amount: "45",
        },
      },
      {
        id: "2",
        title: "Variant 2",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "1.5",
          },
          {
            name: "Colour",
            value: "blue",
          },
        ],
        price: {
          currencyCode: "GBP",
          amount: "45",
        },
      },
      {
        id: "3",
        title: "Variant 3",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "2",
          },
          {
            name: "Colour",
            value: "blue",
          },
        ],
        price: {
          currencyCode: "GBP",
          amount: "45",
        },
      },
      {
        id: "4",
        title: "Variant 4",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "1",
          },
          {
            name: "Colour",
            value: "green",
          },
        ],
        price: {
          currencyCode: "GBP",
          amount: "45",
        },
      },
    ],
    priceRange: {
      maxVariantPrice: {
        currencyCode: "GBP",
        amount: "45",
      },
      minVariantPrice: {
        currencyCode: "GBP",
        amount: "45",
      },
    },
    images: [
      {
        url: `https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=750&q=75`,
        altText: "shoes",
        width: 500,
        height: 500,
      },
    ],
    updatedAt: "12-08-2023",
    featuredImage: {
      url: `https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=750&q=75`,
      altText: "shoes",
      width: 500,
      height: 500,
    },
  },
];

export type Product = Omit<ShopifyProduct, "variants" | "images"> & {
  variants: ProductVariant[];
  images: Image[];
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type ShopifyProduct = {
  id: string;
  availableForSale: boolean;
  title: string;
  handle: string;
  description: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  images: Connection<Image>;
  featuredImage: Image;
  // tags: string[];
  updatedAt: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};
