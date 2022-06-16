import { REGISTER_USER_URL } from "./endpoints";
import { IRegiserUserResponse } from "../types";

import httpInstance from "../utils/http";

export const registerUserApi = async (registrationRequest: any) => {
  try {
    const { data } = await httpInstance.post<IRegiserUserResponse>(
      REGISTER_USER_URL,
      registrationRequest
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
