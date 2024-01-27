import React from 'react'
import { Container } from '../Layout/Layout'
import { ITextBlockProps } from './TextBlock.interface'
import { Box } from '../FlexBox/FlexBox'

const TextBlock: React.FC<ITextBlockProps> = ({ elements = null }) => {
  return (
    <Box paddingY={"large"}>
      <Container>{elements}</Container>
    </Box>
  );
}

export default TextBlock