import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Container } from "../Layout/Layout";
import { CustomImage } from "./test_data";
import { Wrapper } from "./GalleryGrid.style";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface IGalleryProps {
  images?: CustomImage[];
}

const GalleryGrid: React.FC<React.PropsWithChildren<IGalleryProps>> = ({
  images,
}) => {

  const [index, setIndex] = useState(-1);

  const currentImage = images?.[index];
  const nextIndex = (index + 1) % (images?.length ? images.length : 0 );
  const nextImage = images?.[nextIndex] || currentImage;
  const prevIndex = images?.length ? (index + images.length - 1) % images.length : 0;
  const prevImage = images?.[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <Wrapper>
      <Container>
        <Gallery
          images={images as CustomImage[]}
          onClick={handleClick}
          enableImageSelection={false}
          maxRows={2}
        />
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage?.original}
            nextSrcThumbnail={nextImage?.src}
            prevSrc={prevImage?.original}
            prevSrcThumbnail={prevImage?.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
        </Container>
    </Wrapper>
  );
};

export default GalleryGrid;
