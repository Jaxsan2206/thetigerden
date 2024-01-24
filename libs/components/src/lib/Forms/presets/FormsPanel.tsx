import React from 'react'
import { Column, Container, Grid } from '../../Layout/Layout'
import Forms from '../Forms'
import { FormsTitle, StyledGrid, Wrapper } from './FormsPanel.style'
import { Text } from '../../Typography/Typography'
import { IFormsPanelProps } from '../Forms.interface'

const FormsPanel: React.FC<IFormsPanelProps> = ({ title, copy,  formSchema }) => {

  const transformedTitle = title.toUpperCase();
  return (
    <Wrapper>
      <Container>
        <StyledGrid>
          <Column width={[12, null, 6, null]}>
            { title && <FormsTitle>{transformedTitle}</FormsTitle>}
            {copy && <Text>
             {copy}
            </Text>}
          </Column>
          <Column width={[12, null, 6, null]}>
            <Forms formSchema={formSchema} />
          </Column>
        </StyledGrid>
      </Container>
    </Wrapper>
  )
}

export default FormsPanel