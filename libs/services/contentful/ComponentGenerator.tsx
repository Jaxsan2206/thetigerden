import dynamic from "next/dynamic";
import Announcement from "../../components/src/lib/Announcement/Announcement";
import { Mapper } from "../mappers";
import FeaturePanel from "../../components/src/lib/FeaturePanel/FeaturePanel";
import TileGroup from "../../components/src/lib/TileGroup/TileGroup";
import Hero from "../../components/src/lib/Hero/Hero";
import Accordion from "../../components/src/lib/Accordion/Accordion";
import TestimonialCarousel from "../../components/src/lib/Testimonial/preset/TestimonialCarousel";
import FormsPanel from "../../components/src/lib/Forms/presets/FormsPanel";

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
    map: EmbedIFrameNoSSR
}

export const ComponentGenerator: React.FC<React.PropsWithChildren<{}>> = ({content}) => {
    const mappers = new Mapper();
    const contentType = content.sys.contentType.sys.id; //form
    const componentProps = mappers.mapperConfiguration[contentType].mapFrom(content)
    const Component = componentMapper[contentType]; 
    return <Component {...componentProps} />
}

