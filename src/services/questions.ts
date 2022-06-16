import { QUESTIONS, CREATEQUESTION } from "./endpoints";
import httpInstance from "../utils/http";
import { IQuestion } from "../types";

export const questionsApi = async () => {
  try {
    const data = await httpInstance.get(QUESTIONS);
    return data as IQuestion[];
  } catch (error) {
    return Promise.reject(error);
  }
};

export const checkAnswer = async (key: number | string) => {
  try {
    const data = await httpInstance.post(`main/questions/${key}/check_answer/`);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createQuestion = async (question: any) => {
  try {
    const data: any = await httpInstance.post(QUESTIONS, question);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
