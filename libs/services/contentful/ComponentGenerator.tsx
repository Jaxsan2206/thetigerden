import dynamic from "next/dynamic";
import Announcement from "../../components/src/lib/Announcement/Announcement";
import { Mapper } from "../mappers";
import FeaturePanel from "../../components/src/lib/FeaturePanel/FeaturePanel";
import TileGroup from "../../components/src/lib/TileGroup/TileGroup";
import Hero from "../../components/src/lib/Hero/Hero";
import Accordion from "../../components/src/lib/Accordion/Accordion";
import TestimonialCarousel from "../../components/src/lib/Testimonial/preset/TestimonialCarousel";
import FormsPanel from "../../components/src/lib/Forms/presets/FormsPanel";
import withRichText from "../helpers/withRichText";
import TextBlock from "../../components/src/lib/TextBlock/TextBlock";

const GalleryGridNoSSR = dynamic(() => import("../../components/src/lib/GalleryGrid/GalleryGrid"), { ssr: false })

const EmbedIFrameNoSSR = dynamic(() => import("../../components/src/lib/EmbedIFrame/EmbedIFrame"), { ssr: false })

const componentMapper = {
    announcement: Announcement,
    galleryGrid: GalleryGridNoSSR,
    featurePanel: FeaturePanel,
    tileGroup: TileGroup,
    hero: Hero,
    accordion: Accordion,
    testimonialCarousel: TestimonialCarousel,
    form: FormsPanel,
    map: EmbedIFrameNoSSR,
    textBlock: withRichText(TextBlock)
}

export const ComponentGenerator: React.FC = ({ content }) => {
    console.log('content', content)
    const mappers = new Mapper();
    const contentType = content?.sys?.contentType?.sys?.id;
    const componentProps = mappers.mapperConfiguration[contentType].mapFrom(content)
    const Component = componentMapper[contentType]; 
    return <Component {...componentProps} />
}

