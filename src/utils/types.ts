import { InputProps } from "./interface";
export type FormSection = "register" | "another";
export type CustomInputProps = Omit<
  InputProps,
  "validations" | "typeValue" | "value"
>;
export type GenericsObj = {
  [key: string]: unknown;
};
