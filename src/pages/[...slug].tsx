import styled from '@emotion/styled'
import Hero from '../../libs/components/src/lib/Hero/Hero'
import Video from '../../libs/components/src/lib/Video/Video'
import { HeroTitle } from '../../libs/components/src/lib/Typography/Typography'
import { IBaseProps } from '../../libs/components/src/types/common'

const StyledPTag: React.FC<React.PropsWithChildren<IBaseProps>> = styled('p')(
    ({ theme: { colors }}) => ({
        color: colors.primary
    })
)

const Slug = () => {
    return (
        <>
        <StyledPTag>Hello</StyledPTag>
        <Hero/>
        {/* <Video></Video> */}
        <HeroTitle>Hello</HeroTitle>
        </>
    )
}

export default Slug