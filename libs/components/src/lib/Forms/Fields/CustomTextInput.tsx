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

export const CustomTextInput = (props: Props) => {

  // useField hook takes either an object or a string as an argument, but you must always send it the name of the input. In this case there is no problem sending the whole prop object, or just prop.name.
  const [field] = useField(props);

  return (
    <Box mb={'medium'}>
      <CustomInput as="input" {...field} {...props} type="text" />
      {/* The ErrorMessage receives mandatory the name of the input, by default it does not only show the text, without HTML tag so we place the component property to tell it to render a span. */}
      <CustomErrorMessage name={props.name} component="span" className="error" />
    </Box>
  );
};


const CustomInput: React.FC<IBaseProps & IBoxProps> = styled(Box)(
  ({ theme: { textStyles }}) => ({
    border: 'unset',
    backgroundColor: 'transparent',
    height: '35px',
    width: '100%',
    borderBottom: '1px black solid',
    ...textStyles.textSize.small,
    fontFamily: 'unset',

    '::placeholder': {
      color: 'black',
    }
  })
)
const CustomErrorMessage: React.FC<IBaseProps & IBoxProps & ErrorMessageProps> = styled(ErrorMessage)(
  ({ theme: { textStyles }}) => ({
    ...textStyles.textSize.xxsmall,
    color: 'red'
  })
)