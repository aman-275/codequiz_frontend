import { REGISTER_USER_URL, USER_ACTIVATION_URL } from "./endpoints";
import httpInstance from "../utils/http";

export const verification = async (requestData: any) => {
  try {
    const data = await httpInstance.post(USER_ACTIVATION_URL, requestData);
    return data;
  } catch (error) {
    Promise.reject(error);
  }
};
