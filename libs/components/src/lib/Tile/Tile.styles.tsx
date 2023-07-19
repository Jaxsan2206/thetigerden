import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { IBaseProps } from "../../types/common";
import { HeroTitle } from "../Typography/Typography";
import { Box } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IHeroProps } from "../Hero/Hero.interface";


export const TileWrapper: React.FC<PropsWithChildren<IBoxProps & IBaseProps>> = styled(Box)(
  ({ theme: { colors }}) => ({
    height: '400px', 
    color: colors.accent1, 
    position: 'relative', 
    ':hover':{
       '> *:nth-child(1)':{
        transform: 'translate(-50%, -150%)', 
       },
        '> *:nth-child(2)':{
        opacity: 1,
        transform: 'translate(-50%, -50%)'
       }, 
    }
  })
);

export const TileTitle: React.FC<PropsWithChildren<IHeroProps & IBaseProps>> = styled(HeroTitle)(
  ({ theme: { colors }}) => ({
      position: 'absolute', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontWeight: 500, 
      color: colors.white, 


      transition: 'opacity 0.3s ease, transform 0.3s ease', 
      zIndex: 1, 
      opacity: 1
  })
);


export const HoverTitle: React.FC<PropsWithChildren<IHeroProps & IBaseProps>> = styled(HeroTitle)(
    ({ theme: { colors }}) => ({
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 100%)',
        fontWeight: 500, 
        color: colors.white, 
  
  
        transition: 'opacity 0.3s ease, transform 0.3s ease', 
        zIndex: 1, 
        opacity: 0
    })
  );