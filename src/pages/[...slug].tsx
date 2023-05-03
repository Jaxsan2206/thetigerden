import styled from '@emotion/styled'
import Hero from '../../libs/components/src/lib/Hero/Hero'
import Video from '../../libs/components/src/lib/Video/Video'

const StyledPTag = styled('p')(
    ({ theme: { colors }}) => ({
        color: 'red'
    })
)

const Slug = () => {
    console.log('triggered')
    return (
        <>
        {/* <StyledPTag>Hello</StyledPTag> */}
        <Hero/>
        <Video></Video>
        </>
    )
}

export default Slug