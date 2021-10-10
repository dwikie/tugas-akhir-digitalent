import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const source = axios.CancelToken.source;

const http = axios.create({
  baseURL: baseURL,
  headers: {},
});

const httpAuth = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${null}`,
  },
});

export { http, httpAuth, source };
