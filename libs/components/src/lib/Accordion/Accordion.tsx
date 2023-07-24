import React from "react";
import { Column, Container } from "../Layout/Layout";
import { Box, Flex } from "../FlexBox/FlexBox";
import { Text } from "../Typography/Typography";
import { useState, useRef, useEffect } from "react";
import { AccordionTitle, ArrowIcon, Wrapper } from "./Accordion.style";
import { downArrow } from "../../assets/downArrow";
import { FeaturePanelTitle } from "../FeaturePanel/FeaturePanel.style";

const Accordion: React.FC<any> = ({
  title,
  // items
}) => {
  const items = [
    {
      title: "hello",
      copy: "hello",
    },
    {
      title: "hello1",
      copy: "hello1",
    },
    {
      title: "hello2",
      copy: "hello2",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Flex>
          <Column width={[12, 12, 12, 6]}>
            <AccordionTitle>
              {"FREQUENTLY ASKED QUESTIONS"}
            </AccordionTitle>
          </Column>
          <Column width={[12, 12, 12, 6]}>
            <Flex flexDirection={"column"}>
              {items.map((item) => (
                <AccordionItem {...item} />
              ))}
            </Flex>
          </Column>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const AccordionItem: React.FC<any> = ({ title, copy }) => {
  const downArrowObj = { __html: downArrow };

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
    <Box width={"fit-content"} color={'white'}>
      <Flex onClick={() => setIsActive((prev) => !prev)}>
        <Text>{title}</Text>
        <ArrowIcon
          isActive={isActive}
          dangerouslySetInnerHTML={downArrowObj}
        ></ArrowIcon>
      </Flex>

      <Box
        style={{
          maxHeight: `${contentHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
        ref={contentRef}
      >
        <Text>{copy}</Text>
      </Box>
    </Box>
  );
};

export default Accordion;
