import styled from "@emotion/styled"
import { Flex } from "../FlexBox/FlexBox"
import { IBoxProps } from "../FlexBox/Flexbox.interface"
import { IBaseProps } from "../../types/common"

export const CardWrapper: React.FC<IBoxProps> = styled(Flex)({
    flexDirection: 'column',
    alignItems: 'center'
})
  
  
export const Headline: React.FC<IBoxProps>  = styled(Flex)({
    alignItems: 'baseline'
})
  
  
export const HeadlineWrapper: React.FC<IBoxProps & IBaseProps>  = styled(Flex)(
  ({ theme: { space }}) => ({
      flexDirection: 'column',
      alignItems: 'center',
      padding: space.medium
  })
)


export const CopyWrapper: React.FC<IBoxProps & IBaseProps>  = styled(Flex)(
  ({ theme: { space } }) => ({
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${space.none} ${space.large} ${space.large} ${space.large}`
  })
)