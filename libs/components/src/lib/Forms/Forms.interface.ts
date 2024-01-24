export interface InputProps {
    name: string
    value: string | number | boolean
    placeholder?: string
    label?: string
    rows?: string;
    cols?: string;
    type: 'text' | 'radio-group' | 'email' | 'password' | 'select' | 'checkbox' | 'textarea'
    typeValue?: 'string' | 'boolean'
    options?: Opt[]
    validations: Validation[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'pattern'
    pattern?: RegExp;
    value?: string | number | boolean;
    message: string;
}


export interface IFormsProps {
    formSchema: InputProps[]
}

export interface IFormsPanelProps {
    title: string;
    copy: string;
    formSchema: InputProps[];
}
  