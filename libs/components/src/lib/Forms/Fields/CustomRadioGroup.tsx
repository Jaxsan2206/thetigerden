import { useField, ErrorMessage } from 'formik';

type Opt = { value: string | number, desc: string }

interface Props {
    options: Opt[]
    name: string
    label: string
    [x: string]: any
}

export const CustomRadioGroup = ({ label, options, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div>
      <b>{label}</b>
      {options.map((opt) => (
        <label key={opt.value}>
          <input
            {...field}
            {...props}
            type="radio"
            value={opt.value}
            checked={opt.value === field.value}
          />
          {opt.desc}
        </label>
      ))}
      <ErrorMessage name={props.name} component="span" className="error" />
    </div>
  );
};