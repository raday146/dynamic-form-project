import { InputTypes, Props, InputProps } from "../../utils/index";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { ErrorMessage } from "./Error";

const GenerateInput = ({ inputs }: Props) =>
  inputs.map(({ validations, typeValue, value, ...inputProps }) => {
    switch (inputProps.type) {
      case InputTypes.SELECT:
        return <CustomSelect {...inputProps} key={inputProps.name} />;
      case InputTypes.CHECKBOX:
        return <ErrorMessage error={InputTypes.CHECKBOX} />;
      case InputTypes.RADIO:
        return <ErrorMessage error={InputTypes.RADIO} />;
      default:
        return <CustomInput {...inputProps} key={inputProps.name} />;
    }
  });

export default GenerateInput;
