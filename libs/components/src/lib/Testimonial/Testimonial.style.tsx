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
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.5)'
    })
)

export const UserContainer: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {}}) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 2.3fr',
    left: '39.36%',
    right: '1.17%',
    top: '9.76%',
    bottom: '53.93%',
    marginLeft: '30px',
    marginTop: '10px'
    })
)

export const MessageContainer: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {}}) => ({
        justifyContent: 'center',
        height:'260px',
        overflowY: 'auto',
        marginTop: '10px',
        textAlign: 'justify',
       '*::-webkit-scrollbar': {width: '1px'},
       '*::-webkit-scrollbar-track': {background: 'none'}
    })
)