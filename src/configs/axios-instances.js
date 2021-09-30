import axios from "axios";
// import { IsAuthenticated } from "./authentication";

const baseURL = process.env.REACT_APP_API_URL;
const source = axios.CancelToken.source;

const http = axios.create({
  baseURL: baseURL,
});

const httpAuth = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${null}`,
  },
});

export { http, httpAuth, source };
