import { JWT_URL, SOCIAL_AUTH } from "./endpoints";
import httpInstance from "../utils/http";
import { IUserState } from "../types";

export const loginUserApi = async (loginData: any) => {
  try {
    const data = await httpInstance.post(JWT_URL, loginData);

    return data as IUserState;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginUserGoogleApi = async (token: any): Promise<IUserState> => {
  try {
    const data = await httpInstance.post(SOCIAL_AUTH, token);
    return data as IUserState;
  } catch (error) {
    return Promise.reject(error);
  }
};
