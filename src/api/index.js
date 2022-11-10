import axios from 'axios';

const URL = 'http://localhost:5000';

//Using Redux Store
export const fetchUsers = async () => {
   return await axios.get(`${URL}/users`);
};
export const createUserAPI = (payload) => {
   return axios.post(`${URL}/users/createUser`, payload, {
      headers: {
         'Content-Type': 'multipart/form-data',
      },
   });
};
export const fetchUsersByName = (payload) => {
   return axios.get(`${URL}/users/getUserByName`, {
      params: {
         keyword: payload,
      },
   });
};
export const userAvatar = (payload) => {
   return `${URL}/uploads/avatar/${payload}`;
};
export const activeAccount = (payload) => {
   return axios.get(`${URL}/users/activeAccount`, { params: payload });
};
export const recommendUserAPI = () => {
   return axios.get(`${URL}/users/recommendUser`);
};
export const followingUserAPI = (payload) => {
   return axios.get(`${URL}/users/followingUser`, { params: payload });
};
export const uploadVideoAPI = (payload) => {};
export const uploadTemVideoAPI = (payload) => {};

//Call directly
export const setActiveAccount = (payload) => {
   axios.put(`${URL}/users/activeAccount`, payload);
};
