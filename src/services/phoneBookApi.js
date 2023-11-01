import axios from 'axios';

const phoneBookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    Authorization: 'Bearer',
  },
});
export const requestRegister = async formData => {
  const { data } = await phoneBookInstance.post('/users/signup', formData);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await phoneBookInstance.post('/users/login', formData);
  return data;
};

export const requestLogout = async () => {
  const { data } = await phoneBookInstance.post('/users/logout');
  return data;
};

export const requestRefresh = async () => {
  const { data } = await phoneBookInstance.get('/users/current');
  return data;
};
