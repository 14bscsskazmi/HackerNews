import axios from 'axios';

const request = async (
  method: string,
  endpoint: string,
  body = {},
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  switch (method) {
    case 'post':
      return axios.post(endpoint, body, config);
    case 'get':
      return axios.get(endpoint, config);
    default:
      return Promise.reject();
  }
};
export const postRequest = (endpoint: string, body: Object) =>
  request('post', endpoint, body);
export const getRequest = (endpoint: string) =>
  request('get', endpoint, {});
