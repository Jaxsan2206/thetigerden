import styled from "@emotion/styled";

export const Box = styled('div')(
    {
        boxSizing: 'border-box',
        margin: 0, 
        minWidth: 0
    }
)

export const Flex = styled(Box)({
    display: 'flex'
})