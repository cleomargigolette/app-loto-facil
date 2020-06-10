import axios from 'axios';

let baseURL = "http://localhost:8080";

export const serviceApi = axios.create({
    baseURL: `${baseURL}`,
    timeout: 120000000,
  });
  
  serviceApi.interceptors.request.use(
    request => {
      return request;
    },
    error => error
  );