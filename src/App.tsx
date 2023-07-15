import { Form } from "./components/Form";
import { Layout } from "./components/Layout";
import { getInputs } from "./lib/getInputs";

interface SignUpFormType {
  username: string;
  password: string;
  repeat_password: string;
}

const signUpForm = getInputs<SignUpFormType>("register");
const onSubmit = (data: any) => {
  // data?.preventDefault();
  console.log(data);
};

function App() {
  const initialValuesSignUp: SignUpFormType = {
    ...signUpForm.initialValues,
    username: "@franklin361",
    password: "",
    repeat_password: "",
  };
  return (
    <Layout>
      <Form
        error={{
          errorCode: 0,
          message: "",
        }}
        {...signUpForm}
        initialValues={initialValuesSignUp}
        titleForm="Sign Up!"
        onSubmit={onSubmit}
        labelButtonSubmit="Create account"
      />
    </Layout>
  );
}
export default App;
