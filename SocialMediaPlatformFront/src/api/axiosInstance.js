import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5120/api',
});

export default axiosInstance;