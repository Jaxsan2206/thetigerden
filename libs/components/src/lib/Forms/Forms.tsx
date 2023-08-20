import React from "react";
import {
  StyledFlex,
  Wrapper,
  TextWrapper,
  FormsText,
  FormsTitle,
} from "./Forms.style";
import { Column as FormsWrapper, Container } from "../Layout/Layout";
import Button from "../Button/Button";
import { Box } from "../FlexBox/FlexBox";

const Forms: React.FC<any> = ({ copy, title, cta, image }) => {
  return (
    <Wrapper>
      <Container>
        <StyledFlex>
          <TextWrapper width={[12, null, 6, null]}>
            <FormsTitle size={"medium"}>{title}</FormsTitle>
            <FormsText>{copy}</FormsText>
          </TextWrapper>

          <FormsWrapper
            width={[12, null, 6, null]}
            display="flex"
            height={"100%"}
            flexDirection={'column'}
          >
            <form>
            <label>
            <input type="text" placeholder="First Name*" style={{ all: 'unset', borderBottom: '2px solid black', width: '50%',}}></input>
            </label>

            <label>
            <input type="text" placeholder="Second Name*" style={{ all: 'unset', borderBottom: '2px solid black', width: '50%' }}></input>
            </label>
               <label>
            <input type="text" placeholder="Telephone*" style={{ all: 'unset', borderBottom: '2px solid black', width: '50%' }}></input>
            </label>
               <label>
            <input type="text" placeholder="Email*" style={{ all: 'unset', borderBottom: '2px solid black', width: '50%' }}></input>
            </label>
            <label>
            <textarea placeholder="Enquiry*" rows={5} style={{ all: 'unset', borderBottom: '2px solid black' }}></textarea>
            </label>
            <Box>
            <Button>{'Submit'}</Button>
            </Box>
            </form>

          </FormsWrapper>
        </StyledFlex>
      </Container>
    </Wrapper>
  );
};

export default Forms;
