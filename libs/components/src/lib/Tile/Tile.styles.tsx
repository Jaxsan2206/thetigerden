import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { IBaseProps, IImageProps } from "../../types/common";
import { HeroTitle, Text } from "../Typography/Typography";
import { Box } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IHeroTitleProps, ITextProps } from "../Typography/Typography.interface";
import Image from "../Image/Image";


export const TileWrapper: React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
  ({ theme: { colors }}) => ({
    color: colors.accent1, 
    position: 'relative', 
    height: '100%',
    ':hover':{
       '> h1:nth-of-type(1)':{
        transform: 'translate(-50%, -100%)', 
        opacity: 0
       },
        '> p:nth-of-type(1)':{
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        zIndex: 1
       }, 
    }
  }
  )
);

export const TileTitle: React.FC<PropsWithChildren<IHeroTitleProps & IBaseProps>> = styled(HeroTitle)(
  ({ theme: { colors }}) => ({
      position: 'absolute', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontWeight: 500, 
      color: colors.white, 
      transition: 'opacity 0.3s ease, transform 0.3s ease', 
      zIndex: 1, 
      opacity: 1,
      textAlign: 'center'
  })
);


export const HoverText: React.FC<PropsWithChildren<ITextProps & IBaseProps>> = styled(Text)(
    ({ theme: { colors }}) => ({
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 25%)',
        fontWeight: 500, 
        color: colors.white, 
        transition: 'opacity 0.3s ease, transform 0.3s ease', 
        zIndex: -100, 
        opacity: 0,
        textAlign: 'center'
    })
  );

  export const StyledImage: React.FC<PropsWithChildren<IImageProps & IBaseProps>> = styled(Image)({
       height: '100%', 
       objectFit: 'cover', 
       width: '100%'
})
