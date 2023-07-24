import styled from "@emotion/styled";
import { IBaseProps } from "../../types/common";
import { HeroTitle } from "../Typography/Typography";
import { IHeroTitleProps } from "../Typography/Typography.interface";

export const GroupTitle: React.FC<React.PropsWithChildren<IBaseProps & IHeroTitleProps>> = styled(HeroTitle)(
    ({ theme: { space, colors }}) => ({
        paddingTop: space.xlarge, 
        paddingBottom: space.xlarge, 
        color: colors.black
    })
)