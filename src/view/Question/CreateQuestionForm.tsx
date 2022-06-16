import * as yup from "yup";
import errorMessage from "../../utils/formError";

export interface ICreateQuestionForm {
  question: string;
  optionfirst: string;
  optionsecond: string;
  optionthird: string;
  optionfour: string;
  radioButton: number;
}

export const createQuestionSchema = yup.object().shape({
  question: yup.string().required(errorMessage.generalMessage),
  optionfirst: yup.string().required(errorMessage.generalMessage),
  optionsecond: yup.string().required(errorMessage.generalMessage),
  optionthird: yup.string().required(errorMessage.generalMessage),
  optionfour: yup.string().required(errorMessage.generalMessage),
  radioButton: yup.number().required(errorMessage.generalMessage),
});
