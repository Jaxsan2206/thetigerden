import styled from "@emotion/styled"
import { IBaseProps } from "../../types/common"
import { Box, Flex } from "../FlexBox/FlexBox"
import { Container, Grid, Column } from "../Layout/Layout"
import { IContainerProps, IColumnProps } from "../Layout/Layout.interface"
import { ITextProps } from "../Typography/Typography.interface"
import { Text } from "../Typography/Typography"
import { IBoxProps } from "../FlexBox/Flexbox.interface"

export const FooterWrapper: React.FC<React.PropsWithChildren<IContainerProps & IBaseProps>> = styled(Container)(
    ({ theme: { space, colors }}) => ({
        paddingTop: space.large, 
        paddingBottom: space.large,
        backgroundColor: colors.offwhite
    })
  )
  
  export const StyledGrid: React.FC<React.PropsWithChildren<IBoxProps & IBaseProps>> = styled(Grid)(
    ({ theme: { space }}) => ({
        rowGap: space.large
    })
  )
  
  export const FooterColumn: React.FC<React.PropsWithChildren<IColumnProps & IBaseProps>> = styled(Column)(
    ({ theme: { space }}) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: space.small
    })
  )
  
  export const SocialMediaWrapper: React.FC<React.PropsWithChildren<IColumnProps & IBaseProps>> = styled(Flex)(
    ({ theme: { space }}) => ({
        gap: space.xsmall
    })
  )
  
  export const ColumnTitle: React.FC<React.PropsWithChildren<ITextProps & IBaseProps>> = styled(Text)({
      fontWeight: 500,
  })