import AddToCart from "../../../libs/components/src/lib/AddToCart/AddToCart";
import {
  defaultSort,
  sorting,
} from "../../../libs/components/src/lib/Filter/Filter/constants";

import Footer from "../../../libs/components/src/lib/Footer/Footer";
import { IFooterProps } from "../../../libs/components/src/lib/Footer/Footer.interface";
import { Gallery } from "../../../libs/components/src/lib/Gallery/Gallery";
import Header from "../../../libs/components/src/lib/Header/Header";
import { IHeader } from "../../../libs/components/src/lib/Header/Header.interface";
import { Column, Container, Grid } from "../../../libs/components/src/lib/Layout/Layout";
import { VariantSelector } from "../../../libs/components/src/lib/VariantSelector/VariantSelector";
import { products } from "../store/data_v2";


const headerProps: IHeader = {
  links: [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Classes",
      href: "/classes",
    },
    {
      label: "Timetable & Prices",
      href: "/timetable-&-prices",
    },
    {
      label: "Store",
      href: "/store",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ],
  image: {
    src: "https://images.ctfassets.net/joh4bu6temev/1aNex39B98W5OkKEeQAglD/fb64a612a6f7c171de77e32d1b5572f9/Group_666_-_Edited.webp",
    alt: "tigerdenlogo",
    height: "60px",
    width: "280px",
  },
  mobileImage: {
    src: " https://images.ctfassets.net/joh4bu6temev/7FN8gHWqcDRNIyRa1f2yci/6684f76cea5820cae18cd0dcfcd06d1b/MobileIcon.png",
    alt: "tigerdenlogo",
    height: "65px",
    width: "75px",
  },
  cta: {
    url: "https://www.google.com",
    label: "Shop Now",
    variant: "primary",
  },
};

const footerProps: IFooterProps = {
  image: {
    src: " https://images.ctfassets.net/joh4bu6temev/7FN8gHWqcDRNIyRa1f2yci/6684f76cea5820cae18cd0dcfcd06d1b/MobileIcon.png",
    alt: "Logo",
  },
  cta: {
    variant: "primary",
    label: "Shop Now!",
    url: "https://www.google.com",
  },
  columns: [
    {
      columnLabel: "Quick Links",
      links: [
        {
          label: "About Us",
          href: "https://www.google.com",
        },
        {
          label: "Classes",
          href: "https://www.google.com",
        },
        {
          label: "Timetable & Prices",
          href: "https://www.google.com",
        },
        {
          label: "Contact Us",
          href: "https://www.google.com",
        },
      ],
    },
    {
      columnLabel: "Contact",
      links: [
        {
          label: "07393326642",
          href: "https://www.google.com",
        },
        {
          label: "jaxsan@gmail.com",
          href: "https://www.google.com",
        },
      ],
    },
  ],
};

export default function Store({ product }) {
    console.log(product)
  return (
    <>
      <Header {...headerProps}></Header>

        <Container>
            <Grid>
                <Column width={[12, null, 8, null]}>
                    <Gallery images={product.images}></Gallery>
                </Column>
                <Column width={[12, null, 4, null]}>
                    {product.title}
                    <br>
                    </br>
                {`${new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: product.priceRange.maxVariantPrice.currencyCode,
                  currencyDisplay: "narrowSymbol",
                }).format(parseFloat(product.priceRange.maxVariantPrice.amount))}`}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <VariantSelector options={product.options} variants={product.variants}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {product.description}
                    <br/>
                  <AddToCart variants={product.variants} availableForSale={product.availableForSale}></AddToCart>

                </Column>
            </Grid>
        </Container>
     
      <Footer {...footerProps}></Footer>
    </>
  );
}

export const getServerSideProps = async ({ query }: any) => {

    console.log(query.handle)

    const foundProduct = products.find( product => product.handle === query.handle )
  return {
    props: {
        product: foundProduct
    },
  };
};
