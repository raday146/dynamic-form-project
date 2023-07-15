export interface ChildernNode {
  children: JSX.Element | JSX.Element[];
}

export interface InputProps {
  type: "text" | "radio" | "email" | "password" | "select" | "checkbox";
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  label?: string;
  typeValue?: "boolean" | "number" | "string";
  validations?: Validation;
  options?: Opt[];
}

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Validation {
  validationsFields?: any;
  // type: "required" | "isEmail" | "minLength" | "isTrue" | "oneOf";
  value?: string | number | boolean;
  message?: string;
  ref?: string;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  validate?: () => JSX.Element;
}

export interface Props {
  map(
    arg0: ({
      validations,
      typeValue,
      value,
      ...inputProps
    }: {
      [x: string]: any;
      validations: any;
      typeValue: any;
      value: any;
    }) => import("react/jsx-runtime").JSX.Element
  ): unknown;
  onSubmit: (data: any) => void;
  labelButtonSubmit?: string;
  titleForm?: string;
  initialValues: object;
  validationSchema: any;
  inputs: InputProps[];
  error: {
    errorCode: number;
    message: string;
  };
}
