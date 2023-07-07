import Hero from '../../libs/components/src/lib/Hero/Hero'
import Header from '../../libs/components/src/lib/Header/Header'
import Announcement from '../../libs/components/src/lib/Announcement/Announcement'
import { IHeader } from '../../libs/components/src/lib/Header/Header.interface'
import styled from '@emotion/styled'


const StypedPTag: React.FC<React.PropsWithChildren<any>> = styled('p')({
    color: 'pink'
})
const FeaturePanelComponent = (textForPTag) => {
    return (
       <StypedPTag>
            {textForPTag}
       </StypedPTag>
    )
}

export default FeaturePanelComponent