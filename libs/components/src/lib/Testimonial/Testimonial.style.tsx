import styled from "@emotion/styled";
import { Box } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IBaseProps } from "../../types/common";

export const CardContainer: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {colors, space}}) => ({
        backgroundColor: colors.secondary,
        borderRadius: space.small,
        padding: space.base,
        width: '343px',
        height: '369px',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.5)'
        // REMOVE BOX SHADOW AFTER CAROUSEL IS IMPLEMENTED
    })
)

export const UserContainer: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {space}}) => ({
        display: 'flex',
        alignItems: 'center',
        paddingBottom: space.small
    })
)

export const UserIcon: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {space}}) => ({
        width: space.xxxlarge,
        height: space.xxxlarge,
        paddingLeft: space.small
    })
)

export const UserInformation: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {space}}) => ({
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: space.base
    })
)

export const MessageContainer: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {space, colors}}) => ({
        justifyContent: 'center',
        paddingLeft: space.medium,
        paddingRight: space.medium,
        height: '75%',
        overflowY: 'auto',
        textAlign: 'justify',
       '::-webkit-scrollbar': {width: space.small},
       '::-webkit-scrollbar-track': {background: colors.none},
       '::-webkit-scrollbar-thumb': {backgroundColor: colors.greydark, borderRadius: space.small}
    })
)