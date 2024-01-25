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
  richTextMapper,
  testimonialCarouselMapper,
  tileGroupMapper,
} from ".";

class Mapper {
  protected readonly mapperConfiguration = {
    announcement: { mapFrom: announcementMapper },
    accordion: { mapFrom: accordionMapper },
    header: { mapfrom: headerMapper },
    footer: { mapfrom: footerMapper },
    galleryGrid: { mapFrom: galleryGridMapper },
    featurePanel: { mapFrom: featurePanelMapper },
    tileGroup: { mapFrom: tileGroupMapper },
    hero: { mapFrom: heroMapper },
    testimonialCarousel: { mapFrom: testimonialCarouselMapper },
    form: { mapFrom: formMapper },
    map: { mapFrom: embedIFrameMapper },
    textBlock: { mapFrom: richTextMapper }
  };
}

export default Mapper;
