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
import { IGalleryProps } from "../../components/src/lib/GalleryGrid/GalleryGrid";
import { IEmbedIFrameProps } from "../../components/src/lib/EmbedIFrame/EmbedIFrame.interface";
import { Content } from "../mappers/mappers";
import PriceCardGroup from "../../components/src/lib/PriceCardGroup/PriceGroup";
import GroupWrapper from "./GroupWrapper";

const GalleryGridNoSSR = dynamic(
  () => import("../../components/src/lib/GalleryGrid/GalleryGrid"),
  { ssr: false }
) as React.FC<IGalleryProps>;

const EmbedIFrameNoSSR = dynamic(
  () => import("../../components/src/lib/EmbedIFrame/EmbedIFrame"),
  { ssr: false }
) as React.FC<IEmbedIFrameProps>;

interface IComponentMapper {
    [keys: string]: React.FC<React.PropsWithChildren<any>>
}

export const componentMapper: IComponentMapper = {
    announcement: Announcement,
    galleryGrid: GalleryGridNoSSR,
    featurePanel: FeaturePanel,
    tileGroup: TileGroup,
    hero: Hero,
    accordion: Accordion,
    testimonialCarousel: TestimonialCarousel,
    form: FormsPanel,
    map: EmbedIFrameNoSSR,
    textBlock: withRichText(TextBlock),
    priceCardGroup: PriceCardGroup,
    group: GroupWrapper
}

interface IComponentGenerator {
  content: Content;
}

export const ComponentGenerator: React.FC<React.PropsWithChildren<IComponentGenerator>> = ({ content }) => {
    const mappers = new Mapper();
    const mapperConfig = mappers.getMapperConfiguration()
    const contentType = content?.sys?.contentType?.sys?.id;
    const Component = componentMapper?.[contentType]; 
    const componentProps = mapperConfig?.[contentType]?.mapFrom(content)
    return <Component {...componentProps} />
}