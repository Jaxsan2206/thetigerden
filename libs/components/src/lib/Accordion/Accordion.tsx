import React from "react";
import { Column, Container, Grid } from "../Layout/Layout";
import { Flex } from "../FlexBox/FlexBox";
import { Text } from "../Typography/Typography";
import { useState, useRef, useEffect } from "react";
import {
  AccordionItemsWrapper,
  AccordionTextContainer,
  AccordionTitle,
  ArrowIcon,
  Wrapper,
} from "./Accordion.style";
import { useWindowWidth } from "../../../../hooks";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";
import { AccordionItem, IAccordionProps } from "./Accordion.interface";

const Accordion: React.FC<IAccordionProps> = ({ title, items }) => {
  const width = useWindowWidth();
  const { breakpoints } = useTheme() as ITheme;
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);

  return (
    <Wrapper>
      <Container>
        <Grid>
          <Column width={[12, null, 6]}>
            <AccordionTitle size={isMobileNav ? "small" : "medium"}>
              {title}
            </AccordionTitle>
          </Column>
          <Column width={[12, null, 6]}>
            <AccordionItemsWrapper>
              {items.map((item, i) => (
                <AccordionItem {...item} key={i} />
              ))}
            </AccordionItemsWrapper>
          </Column>
        </Grid>
      </Container>
    </Wrapper>
  );
};

const AccordionItem: React.FC<AccordionItem> = ({ title, copy }) => {

  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const getContentHeight = (element: HTMLElement | null) => {
    return element ? element.scrollHeight : 0;
  };

  // Update the content height whenever the component mounts or the 'isActive' state changes
  useEffect(() => {
    setContentHeight(isActive ? getContentHeight(contentRef.current) : 0);
  }, [isActive]);

  return (
    <>
      <Flex
        onClick={() => setIsActive((prev) => !prev)}
        alignItems={"center"}
        justifyContent={"space-between"}
        style={{ cursor: 'pointer'}}
      >
        <Text >{title}</Text>
        <ArrowIcon
          name="DownArrow"
          color={'white'}
          isActive={isActive}    
        />
      </Flex>
      <AccordionTextContainer contentHeight={contentHeight} ref={contentRef}>
        <Text marginY={'small'}>{copy}</Text>
      </AccordionTextContainer>
    </>
  );
};

export default Accordion;
