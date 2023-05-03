import * as React from 'react';
import { BaseHeroTitle, BasePageTitle, BaseText, BaseCaption } from './Typography.style';
import { IHeroTitleProps, IPageTitleProps, ITextProps } from './Typography.interface';

export const HeroTitle: React.FC<React.PropsWithChildren<IHeroTitleProps>> = ({ size = 'medium', as = 'h1', variant = 'primary', children, ...rest }) => (
  <BaseHeroTitle as={as} size={size} variant={variant} {...rest}>
    {children}
  </BaseHeroTitle>
);

export const PageTitle: React.FC<React.PropsWithChildren<IPageTitleProps>> = ({ size = 'medium', as = 'h3', variant = 'primary', children, ...rest }) => {
  return (
    <BasePageTitle as={as} size={size} variant={variant} {...rest}>
      {children}
    </BasePageTitle>
  );
};

export const Text: React.FC<React.PropsWithChildren<ITextProps>> = ({ size = 'medium', as = 'p', children, ...rest }) => (
  <BaseText as={as} size={size} {...rest}>
    {children}
  </BaseText>
);

export const Caption: React.FC<React.PropsWithChildren<ITextProps>> = ({ as = 'p', children, ...rest }) => (
  <BaseCaption as={as} size="xsmall" {...rest}>
    {children}
  </BaseCaption>
);

export const HiddenText: React.FC<React.PropsWithChildren<ITextProps>> = ({ size = 'medium', children, as = 'span', ...rest }) => (
  <BaseText size={size} as={as} display="none" {...rest}>
    {children}
  </BaseText>
);