import { ErrorMessage, ErrorMessageProps, useField } from "formik";
import { Box } from "../../FlexBox/FlexBox";
import styled from "@emotion/styled";
import { IBaseProps } from "../../../types/common";
import { IBoxProps } from "../../FlexBox/Flexbox.interface";

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomTextArea = (props: Props) => {
  const [field] = useField(props);

  const isFullWidth = !props.cols;

  return (
    <Box mb={'medium'}>
      <CustomInput as="textarea" {...field} {...props} isFullWidth={isFullWidth}/>
      <CustomErrorMessage name={props.name} component="span" className="error" />
    </Box>
  );
};

const CustomInput: React.FC<IBaseProps & IBoxProps & { isFullWidth: boolean }> = styled(Box)(
  ({ theme: { textStyles }, isFullWidth }) => (
    {
    display: 'block',
    border: 'unset',
    backgroundColor: 'transparent',
    borderBottom: '1px black solid',
    ...textStyles.textSize.small,
    fontFamily: 'unset',
    ...(isFullWidth && {
      width: '100%'
    }),
    '::placeholder': {
      color: 'black',
      ...textStyles.textSize.small,
    }
  })
)
const CustomErrorMessage: React.FC<IBaseProps & IBoxProps & ErrorMessageProps> = styled(ErrorMessage)(
  ({ theme: { textStyles }}) => ({
    ...textStyles.textSize.xxsmall,
    color: 'red'
  })
)