import styled from "@emotion/styled";
import { IBaseProps } from "../../types/common";
import { HeroTitle } from "../Typography/Typography";
import { IHeroTitleProps } from "../Typography/Typography.interface";
import { IColumnProps } from "../Layout/Layout.interface";
import { Column } from "../Layout/Layout";

export const GroupTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingTop: space.xlarge, 
        paddingBottom: space.xlarge, 
        color: colors.black
    })
)


export const StyledColumn: React.FC<React.PropsWithChildren<IBaseProps & IColumnProps>> = styled(Column)(
    ({ theme: { space, colors, mediaQueries }}) => ({
        paddingRight: "16px", 
        paddingBottom: "16px", 

        [mediaQueries.untilMedium]:{
            paddingRight: 0

        }
    })
)