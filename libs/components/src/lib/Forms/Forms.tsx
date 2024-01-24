import React from "react";
import {
  Wrapper,
} from "./Forms.style";
import { Formik, Form } from "formik";
import { CustomCheckBox } from "./Fields/CustomCheckBox";
import { CustomRadioGroup } from "./Fields/CustomRadioGroup";
import { CustomSelect } from "./Fields/CustomSelect";
import { CustomTextInput } from "./Fields/CustomTextInput";
import { getInputs } from "./helpers/generateValidations";
import { CustomTextArea } from "./Fields/CustomTextArea";
import Button from "../Button/Button";
import { IFormsProps } from "./Forms.interface";

const Forms: React.FC<IFormsProps> = ({ formSchema }) => {
  const { initialValues, inputs, validationSchema } = getInputs(formSchema)
  
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form noValidate>
            {inputs.map(({ name, type, value, rows, cols, ...props }) => {
              switch (type) {
                case "select":
                  return (
                    <CustomSelect
                      key={name}
                      label={props.label!}
                      name={name}
                      options={props.options!}
                    />
                  );

                case "radio-group":
                  return (
                    <CustomRadioGroup
                      label={props.label!}
                      name={name}
                      options={props.options!}
                      key={name}
                    />
                  );

                case "checkbox":
                  return (
                    <CustomCheckBox
                      label={props.label!}
                      key={name}
                      name={name}
                      type={type}
                    />
                  );

                case "textarea":
                  return (
                    <CustomTextArea
                      label={props.label!}
                      key={name}
                      name={name}
                      type={type}
                      rows={rows}
                      cols={cols}
                      placeholder={props.placeholder}
                    />
                  );

                default:
                  return (
                    <CustomTextInput
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );
              }
            })}
            <Button type="submit" variant="secondary">Submit</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Forms;