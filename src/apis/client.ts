import axios from 'axios';
import SERVER_URL from '@/constants/api';
import { getCookie } from '@/utils/cookie';

const client = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

client.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error),
);

export default client;
