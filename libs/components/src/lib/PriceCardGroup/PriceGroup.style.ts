import styled from "@emotion/styled"
import { IBaseProps } from "../../types/common"
import { Column } from "../Layout/Layout"
import { IColumnProps } from "../Layout/Layout.interface"
import { HeroTitle } from "../Typography/Typography"
import { IHeroTitleProps } from "../Typography/Typography.interface"

export const GroupTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingTop: space.xlarge, 
        paddingBottom: space.xlarge, 
        color: colors.black
    })
)

export const StyledColumn: React.FC<React.PropsWithChildren<IBaseProps & IColumnProps>> = styled(Column)(
    ({ theme: { space }}) => ({
        paddingBottom: space.large
    })
)
