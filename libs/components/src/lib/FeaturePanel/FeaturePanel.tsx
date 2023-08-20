import React from "react";
import { Column as ImageWrapper, Container } from "../Layout/Layout";
import {
  FeaturePanelText,
  FeaturePanelTitle,
  StyledFlex,
  TextWrapper,
  Wrapper,
} from "./FeaturePanel.style";
import { Box } from "../FlexBox/FlexBox";
import ButtonWithLink from "../Button/Button";
import Image from "../Image/Image";
import { IFeaturePanelProps } from "./FeaturePanel.interface";
import { useTheme } from "@emotion/react";
import { useWindowWidth } from "../../../../hooks";
import { ITheme } from "../../styles/theme";

const FeaturePanel: React.FC<IFeaturePanelProps> = ({
  copy,
  title,
  cta,
  image,
}) => {
  const { breakpoints } = useTheme() as ITheme;
  const width = useWindowWidth(); 
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);
  
  return (
  <Wrapper>
    <Container>
      <StyledFlex>

      <ImageWrapper width={[12, null, 6, null]} display ='flex' height={'100%'} >
            <Image {...image}  />
        </ImageWrapper>

        <TextWrapper width={[12, null, 6, null]}>
          <FeaturePanelTitle size={isMobileNav ? 'small' : 'medium' }>{title}</FeaturePanelTitle>
          <FeaturePanelText>{copy}</FeaturePanelText>
          <ButtonWithLink href={cta?.url} variant={cta?.variant}>
            {cta?.label}
          </ButtonWithLink>
        </TextWrapper>

      </StyledFlex>
    </Container>
  </Wrapper>
)};

export default FeaturePanel;
