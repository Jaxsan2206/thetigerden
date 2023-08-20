import Hero from "../../libs/components/src/lib/Hero/Hero";
import Header from "../../libs/components/src/lib/Header/Header";
import Announcement from "../../libs/components/src/lib/Announcement/Announcement";
import { IHeader } from "../../libs/components/src/lib/Header/Header.interface";
import Footer from "../../libs/components/src/lib/Footer/Footer";
import FeaturePanel from "../../libs/components/src/lib/FeaturePanel/FeaturePanel";
import { IFeaturePanelProps } from "../../libs/components/src/lib/FeaturePanel/FeaturePanel.interface";
import { IFooterProps } from "../../libs/components/src/lib/Footer/Footer.interface";
import TileGroup from "../../libs/components/src/lib/TileGroup/TileGroup";
import Accordion from "../../libs/components/src/lib/Accordion/Accordion";
import { images } from "../../libs/components/src/lib/GalleryGrid/test_data";

import dynamic from 'next/dynamic'
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
    href: '/store?sort=hello'
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
  primaryHeading: "WELCOME TO",
  secondaryHeading: "THE TIGER DEN",
};
 
const announcementProps = {
  message:
    "Announcement: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const featurePanelProps: IFeaturePanelProps = {
  image: {
    src: "https://images.ctfassets.net/joh4bu6temev/4wFtfsk1LVkPti4E5Excw4/0cd6794111a3b8d21ecb11f69d9909e5/IMG_0439.jpeg",
    alt: "featurepanelimage",
  },
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  title: "ABOUT US",
  cta: {
    label: "Learn More",
    url: "http://www.google.com",
    variant: "primary",
  },
}

const footerProps: IFooterProps = {
  image: {
    src:" https://images.ctfassets.net/joh4bu6temev/7FN8gHWqcDRNIyRa1f2yci/6684f76cea5820cae18cd0dcfcd06d1b/MobileIcon.png", 
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

const tileProps = {
  image: {
    src: "https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png", 
    alt: "image1", 
    type: "background-image"
  }, 
  hoverText: 'Hover Text', 
  title: 'Muay Thai'
}

const tileGroupProps = {
  tiles: [
    {
      image: {
        src: "https://images.ctfassets.net/joh4bu6temev/4wFtfsk1LVkPti4E5Excw4/0cd6794111a3b8d21ecb11f69d9909e5/IMG_0439.jpeg",
        alt: "image1",
        type: "background-image",
      },
      hoverText: "Hover Text",
      title: "Boxing",
    },
    {
      image: {
        src: "https://images.ctfassets.net/joh4bu6temev/4wFtfsk1LVkPti4E5Excw4/0cd6794111a3b8d21ecb11f69d9909e5/IMG_0439.jpeg",
        alt: "image1",
        type: "background-image",
      },
      hoverText: "Hover Text",
      title: "Muay Thai",
    },
    {
      image: {
        src: "https://images.ctfassets.net/joh4bu6temev/4wFtfsk1LVkPti4E5Excw4/0cd6794111a3b8d21ecb11f69d9909e5/IMG_0439.jpeg",
        alt: "image1",
        type: "background-image",
      },
      hoverText: "Hover Text",
      title: "Jutjusu",
    },
    {
      image: {
        src: "https://images.ctfassets.net/joh4bu6temev/4wFtfsk1LVkPti4E5Excw4/0cd6794111a3b8d21ecb11f69d9909e5/IMG_0439.jpeg",
        alt: "image1",
        type: "background-image",
      },
      hoverText: "Hover Text",
      title: "Karate",
    },
  ],
  title: 'CLASSES', 
  cta: {
    variant: 'secondary', 
    label: 'More Classes', 
    url: 'https://www.google.com'
  }, 
};

export default function Home() {
  return (
    <>
      <Header {...headerProps}></Header>
      <Hero {...heroProps} />
      <Announcement {...announcementProps}></Announcement>
      <FeaturePanel {...featurePanelProps}></FeaturePanel>
      <TileGroup {...tileGroupProps}/>
      <Accordion></Accordion>
      <NoSSR images = {images} />
      {/* <Card></Card> */}
      <Footer {...footerProps}></Footer>
    </>
  );
}
