import axios from "axios";
import storage from "./storage";

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
      // Return JSON data
      if (response.data) {
        return response.data;
      }
      return response;
    },
    (error) => {
      // if (error?.response?.errId) {
      //   toast.error(errorMes[error?.response?.errId]);
      // }
      // Attempt to get the actual error returned from API
      const err =
        (error.response && error.response.data && error.response.data) || error;
  
      return Promise.reject(err); // Propagate rejection back to caller
    },
  );
  
  export default instance;