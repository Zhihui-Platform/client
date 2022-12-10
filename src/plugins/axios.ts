import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 6000,
});

instance.interceptors.request.use(
  (config) => {
    nprogress.start();
    return config;
  },
  (error) => {
    nprogress.done();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response;
  },
  (error) => {
    nprogress.done();
    return Promise.reject(error);
  }
);
