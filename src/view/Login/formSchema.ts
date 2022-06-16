import * as yup from "yup";
import errorMessage from "../../utils/formError";

export interface ILoginInput {
  username: string;
  password: string;
}

export const loginSchema = yup.object().shape({
  username: yup.string().required(errorMessage.username),
  password: yup.string().required(errorMessage.password),
});
