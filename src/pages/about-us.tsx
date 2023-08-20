import Hero from "../../libs/components/src/lib/Hero/Hero";
import Header from "../../libs/components/src/lib/Header/Header";
import Announcement from "../../libs/components/src/lib/Announcement/Announcement";
import { IHeader } from "../../libs/components/src/lib/Header/Header.interface";
import Footer from "../../libs/components/src/lib/Footer/Footer";
import FeaturePanel from "../../libs/components/src/lib/FeaturePanel/FeaturePanel";
import { IFooterProps } from "../../libs/components/src/lib/Footer/Footer.interface";
import TileGroup from "../../libs/components/src/lib/TileGroup/TileGroup";
import Accordion from "../../libs/components/src/lib/Accordion/Accordion";
import Gallery from "../../libs/components/src/lib/GalleryGrid/GalleryGrid";
import { images } from "../../libs/components/src/lib/GalleryGrid/test_data";
import Card from "../../libs/components/src/lib/Card/Card";
import CardGroup from "../../libs/components/src/lib/CardGroup/CardGroup";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import('../../libs/components/src/lib/GalleryGrid/GalleryGrid'), { ssr: false })

const headerProps: IHeader = {
  links: [
  {
    label: "About Us", 
    href: '/about-us'
  }, 
  {
    label: "Classes", 
    href: '/classes'
  }, 
  {
    label: 'Timetable & Prices', 
    href: '/timetable-&-prices'
  },
  {
    label: "Store", 
    href: '/store'
  },
  {
    label: "Contact Us", 
    href: '/contact-us'
  }
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


const heroProps = {
  video: "/tigerden.mp4",
//   primaryHeading: "WELCOME TO",
//   secondaryHeading: "THE TIGER DEN",
};




const footerProps: IFooterProps = {
  image: {
    src:"https://images.ctfassets.net/c5iz9ysb7wxa/6xtlGnzFCYaLY25BGYyN4n/bbacd8974e648f2aefff8bd4ace4749c/MobileLogo-Tigerden.png", 
    alt:"Logo"
  }, 
  cta: {
    variant: 'primary', 
    label: 'Shop Now!', 
    url: 'https://www.google.com'
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
  ]
}



export default function Home() {
  return (
    <>
      <Header {...headerProps}></Header>
      <Hero {...heroProps} />
      <CardGroup></CardGroup>
      <NoSSR images = {images} />
      <Footer {...footerProps}></Footer>
    </>
  );
}
