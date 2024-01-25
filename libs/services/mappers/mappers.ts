import { Entry, EntrySkeletonType } from "contentful";
import {
  accordionMapper,
  announcementMapper,
  embedIFrameMapper,
  featurePanelMapper,
  footerMapper,
  formMapper,
  galleryGridMapper,
  headerMapper,
  heroMapper,
  priceCardGroupMapper,
  richTextMapper,
  testimonialCarouselMapper,
  tileGroupMapper,
} from ".";

export type Content = Entry<EntrySkeletonType, undefined, string>

interface IMapper {
  mapFrom: (content: Content) => { [keys: string] : any }
}

interface IMapperConfiguration {
  [keys: string]: IMapper
};

class Mapper {
  protected readonly mapperConfiguration = {
    announcement: { mapFrom: announcementMapper },
    accordion: { mapFrom: accordionMapper },
    header: { mapFrom: headerMapper },
    footer: { mapFrom: footerMapper },
    galleryGrid: { mapFrom: galleryGridMapper },
    featurePanel: { mapFrom: featurePanelMapper },
    tileGroup: { mapFrom: tileGroupMapper },
    hero: { mapFrom: heroMapper },
    testimonialCarousel: { mapFrom: testimonialCarouselMapper },
    form: { mapFrom: formMapper },
    map: { mapFrom: embedIFrameMapper },
    textBlock: { mapFrom: richTextMapper },
    priceCardGroup: { mapFrom: priceCardGroupMapper }
  };

  getMapperConfiguration = (): IMapperConfiguration => {
    return this.mapperConfiguration;
  }
}

export default Mapper;
