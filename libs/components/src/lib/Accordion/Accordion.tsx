import React from "react";
import { Column, Container } from "../Layout/Layout";
import { Box, Flex } from "../FlexBox/FlexBox";
import { Text } from "../Typography/Typography";
import { useState, useRef, useEffect } from "react";
import { AccordionTitle, ArrowIcon, Wrapper } from "./Accordion.style";
import { downArrow } from "../../assets/downArrow";
import { FeaturePanelTitle } from "../FeaturePanel/FeaturePanel.style";
import { useWindowWidth } from "../../../../hooks";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../styles/theme";

const Accordion: React.FC<any> = ({
  title,
  // items
}) => {
  const items = [
    {
      title: "Can I cancel my subscription at anytime?",
      copy: "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
    },
    {
      title: "Can I change my plan later on?",
      copy: "Absolutely! You can upgrade or downgrade your plan anytime. The money paid for the previous subscription will be recalculated to the new plan.",
    },
    {
      title: "Will you renew my subscription automatically?",
      copy: "Yes, your subscription will be automatically renewed according to your pay period.",
    },
    {
      title: "Do you offer any discounts?",
      copy: "Yes! We offer 17% discount for payment per year. There may be other temporary discounts, check for this inside the service.",
    },
    {
      title: "Can I request a refund?",
      copy: "Sure, you will be welcome to request your refund within 14 days of subscribing to any paid plan.",
    },
  ];
  const width = useWindowWidth(); 
  const { breakpoints } = useTheme() as ITheme;
  const isMobileNav = 0 < width && width <= parseInt(breakpoints[2]);

  return (
    <Wrapper>
      <Container>
        <Flex flexWrap={'wrap'}>
          <Column width={[12, null, 6]}>
            <AccordionTitle size={isMobileNav ? 'small' : 'medium'}>
              {"FREQUENTLY ASKED QUESTIONS"}
            </AccordionTitle>
          </Column>
          <Column width={[12, null, 6]}>
            <Box flexDirection={"column"} color={'white'}>
              {items.map((item) => (
                <AccordionItem {...item} />
              ))}
            </Box>
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
    <>
      <Flex onClick={() => setIsActive((prev) => !prev)} alignItems={'center'} justifyContent={'space-between'} 
      style={{}}
      >
        <Text>{title}</Text>
        <ArrowIcon
          isActive={isActive}
          dangerouslySetInnerHTML={downArrowObj}
          width={'34px'}
          height={'34px'}
        ></ArrowIcon>
      </Flex>

      <Box
        style={{
          maxHeight: `${contentHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          borderBottom: '1px solid white'
        }}
        ref={contentRef}
      >
        <Text>{copy}</Text>
      </Box>
    </>
  );
};

export default Accordion;
