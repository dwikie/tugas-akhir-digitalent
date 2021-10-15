import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_API_URL;
const AUTH_KEY = process.env.REACT_APP_AUTH_TOKEN_KEY;
const source = axios.CancelToken.source;

const http = axios.create({
  baseURL: BASE_URL,
});

const httpAuth = axios.create({
  baseURL: BASE_URL,
});

httpAuth.interceptors.request.use(
  (configs) => {
    configs.headers = {
      ...configs.headers,
      Authorization: `Bearer ${Cookies.get(AUTH_KEY)}`,
    };
    return configs;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export { http, httpAuth, source };
