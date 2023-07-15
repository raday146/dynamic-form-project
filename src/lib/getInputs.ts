import { FormSection, GenericsObj } from "src/utils/types";
import { forms } from "./form";
import { InputProps, Validation } from "src/utils/interface";

export const getInputs = <T>(section: FormSection) => {
  const initialValues: GenericsObj = {};

  const validationsFields: GenericsObj = {};

  for (const field of forms[section]) {
    initialValues[field.name] = field.value;
    if (!field.validations) continue;

    const schema: Validation = field.validations;

    validationsFields[field.name] = schema;
    console.log(validationsFields);
  }

  return {
    validationSchema: validationsFields,
    initialValues: initialValues,
    inputs: forms[section],
  };
};
