import React, { useState } from "react";
import { Gallery as GalleryGrid } from "react-grid-gallery";
import { Container } from "../Layout/Layout";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { CustomImage } from "./test_data";
import { Wrapper } from "./Gallery.style";

interface IGalleryProps {
  images?: CustomImage[];
}


const Gallery: React.FC<React.PropsWithChildren<IGalleryProps>> = ({
  images,
}) => {
  const [index, setIndex] = useState(-1);

  const slides = images?.map(({ original, width, height }) => ({
   src: original,
   width,
   height,
 }));

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
   <Wrapper>
      <Container>

      <GalleryGrid images={images as CustomImage[]}
        onClick={handleClick}
        enableImageSelection={false}
        maxRows={2} />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
      </Container>
      </Wrapper>
  );
};

export default Gallery;
