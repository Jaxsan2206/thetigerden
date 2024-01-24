import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomCheckBox = (props: Props) => {
  const [field] = useField(props);

  return (
    <div>
      <label className="label_check">
          <input {...field} {...props} type="checkbox"/>
          <span>{props.label}</span>
          <ErrorMessage name={props.name} component="span" className="error" />
      </label>
    </div>
)
};
