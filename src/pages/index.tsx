import Hero from "../../libs/components/src/lib/Hero/Hero";
import Header from "../../libs/components/src/lib/Header/Header";
import Announcement from "../../libs/components/src/lib/Announcement/Announcement";
import { IHeader } from "../../libs/components/src/lib/Header/Header.interface";
import Footer from "../../libs/components/src/lib/Footer/Footer";
import FeaturePanel from "../../libs/components/src/lib/FeaturePanel/FeaturePanel";
import Testimonial from "../../libs/components/src/lib/Testimonial/Testimonial";
import Tiles from "../../libs/components/src/lib/Tile/Tile";
import { IFeaturePanelProps } from "../../libs/components/src/lib/FeaturePanel/FeaturePanel.interface";
import { IFooterProps } from "../../libs/components/src/lib/Footer/Footer.interface";
import TileGroup from "../../libs/components/src/lib/TileGroup/TileGroup";
import Accordion from "../../libs/components/src/lib/Accordion/Accordion";
import Gallery from "../../libs/components/src/lib/Gallery/Gallery";
import { images } from "../../libs/components/src/lib/Gallery/test_data";

const headerProps: IHeader = {
  links: ["About Us", "Classes", "Timetable & Prices", "Contact Us"],
  image: {
    src: "https://images.ctfassets.net/c5iz9ysb7wxa/ye4hvPDphEXdtZVH7QeFd/295706f1a898e0745bc85f2f1394c2ae/Group_666_-_Edited.png",
    alt: "tigerdenlogo",
    height: "60px",
    width: "280px",
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
    src: "https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png",
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
        src: "https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png",
        alt: "image1",
        type: "background-image",
      },
      hoverText: "Hover Text",
      title: "Boxing",
    },
    {
      image: {
        src: "https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png",
        alt: "image1",
        type: "background-image",
      },
      hoverText: "Hover Text",
      title: "Muay Thai",
    },
    {
      image: {
        src: "https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png",
        alt: "image1",
        type: "background-image",
      },
      hoverText: "Hover Text",
      title: "Jutjusu",
    },
    {
      image: {
        src: "https://images.ctfassets.net/c5iz9ysb7wxa/2GNKZfiVGLtEJGe1wu7oG9/4fcd24aa0849014b6111addd972b6b7c/IMG_0439_2.png",
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
}

const testimonialProps = {
  userImage: {
    src: "https://i.etsystatic.com/20164836/r/il/bd77b8/3943923229/il_fullxfull.3943923229_ebhm.jpg",
    alt: "user profile picutre"
}, 
username: "Barbie",
date: "30.07.2023",
message: 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

export default function Home() {
  return (
    <>
      <Header {...headerProps}></Header>
      <Hero {...heroProps} />
      <Announcement {...announcementProps}></Announcement>
      <FeaturePanel {...featurePanelProps}></FeaturePanel>
      <TileGroup {...tileGroupProps}/>
      <Accordion></Accordion>
      <Gallery images = {images}/>
      <Testimonial {...testimonialProps}></Testimonial>
      <Footer {...footerProps}></Footer>
    </>
  );
}
