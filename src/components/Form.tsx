import { FormProvider, useForm } from "react-hook-form";
import { Props } from "src/utils/interface";
import { InputProps } from "src/utils/interface";
import GenerateInput from "./inputs/GenerateInput";
import { ajvResolver } from "@hookform/resolvers/ajv";
export const Form = ({ ...props }: Props) => {
  const {
    initialValues,
    inputs,
    onSubmit,
    // validationSchema,
    titleForm,
    labelButtonSubmit = "Submit",
  } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formMethods = useForm({
    defaultValues: initialValues,
  });
  console.log(errors);
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={void formMethods.handleSubmit(onSubmit)}
        className="bg-secondary rounded-md p-10 pt-5 shadow-2xl shadow-primary/30 flex flex-col gap-2 border border-primary w-full min-h-[390px]"
      >
        {titleForm && (
          <h5 className="font-extrabold text-center text-2xl pb-2 mb-2 border-b border-white/50">
            {titleForm}
          </h5>
        )}

        <section className="flex-1 flex flex-col gap-3">
          {GenerateInput(props)}
        </section>
        {errors.exampleRequired && <span>This field is required</span>}

        <button
          className="bg-primary transition-opacity text-white w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4"
          type="submit"
        >
          {labelButtonSubmit}
        </button>
      </form>
    </FormProvider>
  );
};
