export interface IRegiserUserResponse {
  email: string;
  username: string;
  id: number;
  first_name: string;
  last_name: string;
}

export type status = "idle" | "loading" | "success" | "error";

export interface ILoginState {
  status: status;
  currentUser: IRegiserUserResponse;
  error?: any;
}

export interface ITokenState {
  access: string;
  refresh: string;
}

export interface IUserState {
  access: string;
  refresh: string;
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IAnswer {
  id: number;
  correct: boolean;
  answer: string;
}

export interface IComment {
  question: number;
  comment: string;
  user: number;
  username: string;
}

export interface IQuestion {
  description: string;
  id: number;
  answers: Array<IAnswer>;
  author: number;
  author_name: string;
  comments: Array<IComment>;
}

export interface IQuestionState {
  status: status;
  question: Array<IQuestion>;
  error: any;
}
