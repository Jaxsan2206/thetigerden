import React from "react";
import { Column as ImageColumn, Container, Grid } from "../Layout/Layout";
import {
  Content,
  FeaturePanelText,
  FeaturePanelTitle,
  ImageContainer,
  TextColumn,
  Wrapper,
} from "./FeaturePanel.style";
import Image from "../Image/Image";
import { IFeaturePanelProps } from "./FeaturePanel.interface";
import { useTheme } from "@emotion/react";
import { useWindowWidth } from "../../hooks";
import { ITheme } from "../../styles/theme";
import Button from "../Button/Button";

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
        <Grid>
          <ImageColumn width={[12, null, 6, null]}>
            <ImageContainer>
              <Image {...image} />
            </ImageContainer>
          </ImageColumn>
          <TextColumn width={[12, null, 6, null]}>
            <Content>
              <FeaturePanelTitle size={isMobileNav ? "small" : "medium"}>
                {title}
              </FeaturePanelTitle>
              <FeaturePanelText>{copy}</FeaturePanelText>
              <Button href={cta?.url} variant={cta?.variant}>
                {cta?.label}
              </Button>
            </Content>
          </TextColumn>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default FeaturePanel;
