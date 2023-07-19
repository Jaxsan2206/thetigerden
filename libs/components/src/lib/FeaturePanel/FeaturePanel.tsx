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

const FeaturePanel: React.FC<IFeaturePanelProps> = ({
  copy,
  title,
  cta,
  image,
}) => (
  <Wrapper>
    <Container>
      <StyledFlex>
        <TextWrapper width={[12, null, null, 6]}>
          <FeaturePanelTitle>{title}</FeaturePanelTitle>
          <FeaturePanelText>{copy}</FeaturePanelText>
          <ButtonWithLink href={cta?.url} variant={cta?.variant}>
            {cta?.label}
          </ButtonWithLink>
        </TextWrapper>
        <ImageWrapper width={[12, null, null, 6]}>
          <Box height={"100%"}>
            <Image {...image} />
          </Box>
        </ImageWrapper>
      </StyledFlex>
    </Container>
  </Wrapper>
);

export default FeaturePanel;
