import styled from "@emotion/styled";
import { Box, Flex } from "../FlexBox/FlexBox";
import { IBoxProps } from "../FlexBox/Flexbox.interface";
import { IBaseProps, IImageProps } from "../../types/common";
import Image from "../Image/Image";
import { Text } from "../Typography/Typography";
import { ITextProps } from "../Typography/Typography.interface";

export const CardContainer: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: {colors, space}}) => ({
        backgroundColor: colors.white,
        padding: space.base,
        boxShadow: '0px 3px 15px rgba(0,0,0,0.2)'
    })
)

export const UserContainer: React.FC<IBoxProps & IBaseProps>=styled(Flex)(
    ({theme: { space }}) => ({
        alignItems: 'center',
        paddingLeft: space.xlarge,
        paddingRight: space.xlarge,
        paddingBottom: '16px'
    })
)

export const UserImage: React.FC<IBaseProps & IImageProps>=styled(Image)({
        width: '72px',
        height: '72px',
        borderRadius: '100%'
})

export const UserInitials: React.FC<IBaseProps & IBoxProps & { initials: string }>=styled(Box)(
    ({ initials, theme: { colors } }) => ({
    position: 'relative',
    width: '72px',
    height: '72px',
    borderRadius: '100%',
    backgroundColor: colors.offblack,
    color: colors.white,

    ':after': {
        position: 'absolute',
        content: `"${initials}"`,
        fontSize: '32px',
        top: '50%',
        left: '50%', 
        transform: 'translate(-50%, -50%)'
    }
}))



export const UserInformation: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: { space }}) => ({
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: space.base
    })
)

export const MessageContainer: React.FC<IBoxProps & IBaseProps>=styled(Box)(
    ({theme: { space }}) => ({
        position: 'relative',
        justifyContent: 'center',
        paddingLeft: space.xxlarge,
    })
)

export const SpeechMark: React.FC<IBaseProps & ITextProps>=styled(Text)({
        position: 'absolute',
        fontSize: '96px',
        fontWeight: '400',
        left: '6px',
        top: '16px'
})
