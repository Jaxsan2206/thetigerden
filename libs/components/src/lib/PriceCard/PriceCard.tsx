import React from 'react';
import { IButtonProps } from '../Button/Button.interface';
import Button from '../Button/Button';
import { Caption, Text } from '../Typography/Typography';
import { CardWrapper, HeadlineWrapper, Headline, CopyWrapper } from './PriceCard.style';

interface IHeadline {
    price: string;
    unit: string;
    disclaimer: string;
}

export interface IPriceProps {
    title: string;
    headline: IHeadline;
    copy?: string;
    cta?: IButtonProps
}


const PriceCard: React.FC<IPriceProps> = ({ title, headline, copy, cta }) => {
  return (
    <CardWrapper>
      <Text size={"xlarge"}>{title}</Text>
      <HeadlineWrapper>
        <Headline>
          <Text fontWeight={500} size={"xxlarge"}>
            {headline.price}
          </Text>
          <Text fontWeight={500} size={"medium"}>
            {headline.unit}
          </Text>
        </Headline>
        <Caption>{headline.disclaimer}</Caption>
      </HeadlineWrapper>
      <CopyWrapper>{copy}</CopyWrapper>
      <Button {...cta} />
    </CardWrapper>
  );
};




export default PriceCard