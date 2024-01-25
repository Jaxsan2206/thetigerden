import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react'
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import Button from '../Button/Button';
import { ITheme } from '../../styles/theme';
import { useTheme } from '@emotion/react';
import { useWindowWidth } from '../../hooks';
import { ControlWrapper, Wrapper, CarouselHeader, CarouselTitle, FlexContainer, Slide, SlideItemContainer } from './Carousel.style';
import { Container } from '../Layout/Layout';

export interface ICarouselProps {
    title: string;
    options?: EmblaOptionsType;
    slideSize: number[]
}

export interface ICarouselControlsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  isMobileNav?: boolean;
}

const CarouselControls: React.FC<ICarouselControlsProps> = ({ scrollPrev, scrollNext, prevBtnDisabled, nextBtnDisabled, isMobileNav }) => {
  return (
    <ControlWrapper isMobileNav={isMobileNav}>
      <Button
        variant={"secondary"}
        icon={{ name: "LeftArrow", iconPosition: "end" }}
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      />
      <Button
        variant={"secondary"}
        icon={{ name: "RightArrow", iconPosition: "end" }}
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      />
    </ControlWrapper>
  );
}



const Carousel: React.FC<PropsWithChildren<ICarouselProps>> = ({ title, options = {}, children, slideSize }) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
    
    const { breakpoints } = useTheme() as ITheme;
    const width = useWindowWidth();
    const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
    
    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
      )
      const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
      )

      const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
      }, [])
    
      useEffect(() => {
        if (!emblaApi) return
    
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
      }, [emblaApi, onSelect])
    

  return (
    <Wrapper fullWidth>
      <Container>
      <CarouselHeader>
        <CarouselTitle size={isMobileNav ? "small" : "medium"}>
          {title}
        </CarouselTitle>
        { !isMobileNav && <CarouselControls
          scrollPrev={scrollPrev}
          scrollNext={scrollNext}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
        />}
      </CarouselHeader>
        {/* @ts-ignore */}
        <SlideItemContainer ref={emblaRef} >
          <FlexContainer >
            {React.Children.map(children, child =>  <Slide slideSize={slideSize}>{child}</Slide>)}
          </FlexContainer>
        </SlideItemContainer>

        {isMobileNav && <CarouselControls
          scrollPrev={scrollPrev}
          scrollNext={scrollNext}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          isMobileNav={isMobileNav}
        />}
      </Container>
    </Wrapper>
  );
}



export default Carousel