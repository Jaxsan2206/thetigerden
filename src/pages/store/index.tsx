import { Suspense } from "react";
import Collections from "../../../libs/components/src/lib/Filter/Collections/Collections";
import Filter from "../../../libs/components/src/lib/Filter/Filter/Filter";
import {
  defaultSort,
  sorting,
} from "../../../libs/components/src/lib/Filter/Filter/constants";
import Search from "../../../libs/components/src/lib/Filter/Search/Search";
import {
  Column,
  Container,
  Grid,
} from "../../../libs/components/src/lib/Layout/Layout";
import Footer from "../../../libs/components/src/lib/Footer/Footer";
import { IFooterProps } from "../../../libs/components/src/lib/Footer/Footer.interface";
import Header from "../../../libs/components/src/lib/Header/Header";
import { IHeader } from "../../../libs/components/src/lib/Header/Header.interface";
import { Box } from "../../../libs/components/src/lib/FlexBox/FlexBox";
import Products from "../../../libs/components/src/lib/Product/Product";
import { products } from "./data_v2";

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

export default function Store({ searchParams }) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  // TODO: Depending on the sortKey, reverse and SearchValue, we need to query the database. Arun, will leave this to you to add the API call. 
  
  return (
    <>
      <Header {...headerProps}></Header>
      
      <Container>
      <Search />
        <Grid>
          <Column width={[12, null, 2]}>
            <Collections />
          </Column>
          <Column width={[12, null, 8]}>
            <Products products={products} />
          </Column>
          <Column width={[12, null, 2]}>
            <Filter list={sorting} />
          </Column>
        </Grid>
      </Container>

      <Footer {...footerProps}></Footer>
    </>
  );
}

export const getServerSideProps = async ({ query }: any) => {
  return {
    props: {
      searchParams: query,
    },
  };
};
