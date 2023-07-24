import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";

export const CardContainer: React.FC<any>=styled(Box)(
    ({theme: {colors, space}}) => ({
        backgroundColor: colors.secondary,
        borderRadius: space.small,
        padding: space.base,
        width: '343px',
        height: '369px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.5)'
    })
)