import axios from "axios";
const API_BASE_URL = "http://192.168.29.218:3005/api";

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});

const api = {
 

  login: (data) => {
    return apiInstance.post('/login', data);
  },

};

export default api;
