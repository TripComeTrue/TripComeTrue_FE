import axios from 'axios';
import SERVER_URL from '@/constants/api';

const imageClient = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    'content-type': 'multipart/form-data',
  },
});

imageClient.interceptors.request.use(
  (config) => {
    // const accessToken = getCookie('accessToken');
    // if (accessToken) {
    config.headers.Authorization = `Bearer eyJraWQiOiJrZXkyIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJuZXcxMUBuYXZlci5jb20iLCJpYXQiOjE3MDU3NzE5MjEsImV4cCI6MTcwNTkxNTkyMX0.23GePapRh7Nr_Xw6kJtpO6m1HoNwg3_FnmAQNXlFXmM`;
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

imageClient.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error),
);

export const postImages = async (formData: FormData) => {
  const res = await imageClient.post(`v1/images`, formData);

  return res.data.data;
};

export const deleteImages = async (formData: FormData) => {
  const res = await imageClient.delete(`v1/images`, { data: formData });

  return res;
};
