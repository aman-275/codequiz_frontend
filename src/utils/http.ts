import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import CONFIG from "../config";

import SECURE_ENDPOINTS from "../services/secureEndpoints";

interface RespData {
  [key: string]: any;
}

interface IAxiosInstance {
  get(url: string, config?: AxiosRequestConfig): Promise<Record<string, any>>;
  delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Record<string, any>>;
  post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Record<string, any>>;
  put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Record<string, any>>;
}

const httpInstance: IAxiosInstance & AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: CONFIG.http.baseURL,
});

httpInstance.interceptors.request.use(
  function (config) {
    // console.log(localStorage.getItem("usertoken"), "sdflkds");
    const token = localStorage.getItem("codequiztoken");
    // if (token) {
    //   // config.headers?.Authorization = `JWT token` as string;
    //   config.headers = {
    //     Authorization: `JWT ${token}` as string,
    //   };
    // }

    if (token) {
      const token = localStorage.getItem("codequiztoken");
      config.headers = {
        Authorization: `JWT ${token}` as string,
      };
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

httpInstance.interceptors.response.use(
  function (res) {
    const headers = res.config.headers;
    const data: RespData = res.data;
    return data;
  },

  function (error) {
    return Promise.reject(error?.response?.data);
  }
);

export default httpInstance;
