import styled from "@emotion/styled"
import { IBaseProps } from "../../types/common"
import { Box } from "../FlexBox/FlexBox"

export const Wrapper: React.FC<React.PropsWithChildren<IBaseProps>> = styled(Box)(
    ({ theme: {colors }}) => ({
        backgroundColor: colors.offwhite 
    })
)