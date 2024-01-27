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


const PriceCard: React.FC<IPriceProps> = ({ title = '', headline = null, copy = '', cta = null }) => {
  return (
    <CardWrapper>
      <Text size={"xlarge"}>{title}</Text>
      <HeadlineWrapper>
        <Headline>
          {headline?.price && <Text fontWeight={500} size={"xxlarge"}>
            {headline.price}
          </Text>}
          {headline?.unit && <Text fontWeight={500} size={"medium"}>
            {headline.unit}
          </Text>}
        </Headline>
        {headline?.disclaimer && <Caption>{headline.disclaimer}</Caption>}
      </HeadlineWrapper>
      {copy && <CopyWrapper>{copy}</CopyWrapper>}
      {cta?.href && <Button {...cta} />}
    </CardWrapper>
  );
};




export default PriceCard