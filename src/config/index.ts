const { VITE_HTTP_BASE, VITE_DEV } = import.meta.env;
const PROD = VITE_DEV === "false";
const isDevelopment = !PROD;

const CONFIG = {
  isProduction: PROD,
  isDevelopment,
  baseURL: "/",

  title: "Code Quiz",
  http: {
    baseURL: VITE_HTTP_BASE as string,
  },
};

export default CONFIG;
