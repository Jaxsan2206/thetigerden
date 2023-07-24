import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '../FlexBox/FlexBox';
import { ITextProps, IHeroTitleProps, IPageTitleProps } from './Typography.interface';
import { IBaseProps } from '../../types/common';
import { variant } from 'styled-system'

export const BaseHeroTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(Box)(
  ({ theme: { textStyles } }) => (
    variant({
      prop: 'size', 
      variants: textStyles.heroTitleSize
    })
  )
);

export const BasePageTitle: React.FC<React.PropsWithChildren<IBaseProps & IPageTitleProps>> = styled(Box)(
  ({ theme: { textStyles } }) => (
  variant({
    prop: 'size', 
    variants: textStyles.pageTitleSize
  })
));

export const BaseText: React.FC<React.PropsWithChildren<IBaseProps & ITextProps>> = styled(Box)(
  ({ theme: { textStyles } }) => (
    variant({
      prop: 'size', 
      variants: textStyles.textSize
    })
));

export const BaseCaption: React.FC<React.PropsWithChildren<ITextProps>> = styled(BaseText)({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.04rem',
});