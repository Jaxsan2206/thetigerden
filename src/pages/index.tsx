import Hero from "../../libs/components/src/lib/Hero/Hero";
import Header from "../../libs/components/src/lib/Header/Header";
import Announcement from "../../libs/components/src/lib/Announcement/Announcement";
import { IHeader } from "../../libs/components/src/lib/Header/Header.interface";
import Footer from "../../libs/components/src/lib/Footer/Footer";
import FeaturePanel from "../../libs/components/src/lib/FeaturePanel/FeaturePanel";
import Tiles from "../../libs/components/src/lib/Tiles/Tiles";
import Testimonial from "../../libs/components/src/lib/Testimonial/Testimonial";

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

export default function Home() {
  return (
    <>
      <Header {...headerProps}></Header>
      <Hero {...heroProps} />
      <Announcement {...announcementProps}></Announcement>
      <FeaturePanel></FeaturePanel>
      <Tiles></Tiles>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}
