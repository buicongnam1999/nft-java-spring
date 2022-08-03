import axios from "axios";
import queryString from 'query-string';
import Storage from "./storage";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.request.use(
  async (config) => {
    const token = Storage.get("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const err =
      (error.response && error.response.data && error.response.data) || error;

    return Promise.reject(err);
  },
);

export default instance;