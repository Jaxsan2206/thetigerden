import React from 'react'
import { IImageProps } from '../../types/common';
import { CardContainer } from './Testimonial.style';
import { Box } from '../FlexBox/FlexBox';

interface ITestimonial {
    userImage: IImageProps;
    username: string;
    // TODO: use date type
    date: string; 
    message: string; 
}

const image = {
  src: '//i.etsystatic.com/20164836/r/il/bd77b8/3943923229/il_fullxfull.3943923229_ebhm.jpg',
  alt: 'barbie'
}

const name = 'Jaxsan'
const date = '24.07.2023'

const Testimonial: React.FC<React.PropsWithChildren<any>> = () =>  {
  return (
    <CardContainer>
      <Box>
        {image.src}
        {name}
        {date}
      </Box>
    </CardContainer>
  )
}


export default Testimonial