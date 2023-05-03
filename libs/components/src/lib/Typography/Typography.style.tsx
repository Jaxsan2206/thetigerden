import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '../FlexBox/FlexBox';
import { ITextProps, IHeroTitleProps, IPageTitleProps } from './Typography.interface';
import { IBaseProps } from '../../types/common';

export const BaseHeroTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(Box)();

export const BasePageTitle: React.FC<React.PropsWithChildren<IBaseProps & IPageTitleProps>> = styled(Box)();

export const BaseText: React.FC<React.PropsWithChildren<IBaseProps & ITextProps>> = styled(Box)();

export const BaseCaption: React.FC<React.PropsWithChildren<ITextProps>> = styled(BaseText)({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.04rem',
});