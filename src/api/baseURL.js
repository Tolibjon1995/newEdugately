import axios from "axios";

const API_URL = "https://backend.edugately.com/api/v1/";




const base = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  timeoutErrorMessage: "Connection is lost. Server not responded",
});

base.interceptors.request.use(
  function (config) {
    const lang = localStorage.getItem('i18nextLng')
    config.headers = {
      ...config.headers['Accept-language'] = lang ?? 'uz',
      Authorization: `Bearer ${localStorage.getItem("access")}`
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default base