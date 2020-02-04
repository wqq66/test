import axios from "axios";
import store from "../store";
axios.defaults.baseURL = "";

const request = axios.create({
  timeout: 5000
});

request.interceptors.request.use(
  config => {
    if (store.getters.getToken) {
      config.headers.Authorization = store.state.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
