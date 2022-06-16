import * as yup from "yup";
import errorMessage from "../../utils/formError";

export interface IRegisterInput {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  passwordConfirmation?: string;
}

export const registrationSchema = yup.object().shape({
  first_name: yup.string().required(errorMessage.firstName),
  last_name: yup.string().required(errorMessage.lastName),
  email: yup
    .string()
    .email("Must be a valid email")
    .required(errorMessage.email),
  username: yup.string().required(errorMessage.username),
  password: yup.string().required(errorMessage.password),
  passwordConfirmation: yup
    .string()
    .required(errorMessage.password)
    .oneOf([yup.ref("password"), null], errorMessage.passwordMatch),
});
