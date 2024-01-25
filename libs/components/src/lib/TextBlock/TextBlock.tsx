import React from 'react'
import { Container } from '../Layout/Layout'
import { ITextBlockProps } from './TextBlock.interface'

const TextBlock: React.FC<ITextBlockProps> = ({ elements }) => {
  return (
    <Container>
        {elements}
    </Container>
  )
}

export default TextBlock