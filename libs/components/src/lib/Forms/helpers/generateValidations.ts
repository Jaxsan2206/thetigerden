import * as Yup from "yup";
import { InputProps } from "../Forms.interface";

type YupBoolean = Yup.BooleanSchema<boolean | undefined, Yup.AnyObject, undefined, "">
type YupTrueBoolean = Yup.BooleanSchema<true | undefined, Yup.AnyObject, "", "">;
type YupString = Yup.StringSchema<string | undefined, Yup.AnyObject, undefined, "">

const generateValidations = (field: InputProps) => {

    /* 
        Yup validations are usually like the following. This is recreated in this function.
        firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'), 
    */

    let schema: YupBoolean | YupTrueBoolean | YupString = Yup[field.typeValue ? field.typeValue : 'string']()

    for (const rule of field.validations) {
        switch (rule.type) {
            case 'isTrue': schema = (schema as YupBoolean).isTrue(rule.message); break;
            case 'isEmail': schema = (schema as YupString).email(rule.message); break;
            case 'pattern': schema = (schema as YupString).matches(rule?.pattern as RegExp, rule.message); break;
            case 'minLength': schema = (schema as YupString).min(rule?.value as number, rule.message); break;
            default: schema = schema.required(rule.message); break;
        }
    }
    return schema
}



export const getInputs = (formSchema: InputProps[]) => {

    let initialValues: { [key: string]: any } = {};
    let validationsFields: { [key: string]: any } = {};
    for (const field of formSchema) {
        initialValues[field.name] = field.value;
        if (!field.validations) continue;
        const schema = generateValidations(field)
        validationsFields[field.name] = schema;
    }
    return {
        validationSchema: Yup.object({ ...validationsFields }),
        inputs: formSchema,
        initialValues
    };
};