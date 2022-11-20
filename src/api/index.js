import axios from 'axios';

const URL = 'http://localhost:5000';

//Using Redux Store
export const fetchUsers = () => {
   return axios.get(`${URL}/users`);
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
export const activeAccount = (payload) => {
   return axios.get(`${URL}/users/activeAccount`, { params: payload });
};
export const recommendUserAPI = () => {
   return axios.get(`${URL}/users/recommendUser`);
};
export const uploadVideoAPI = (payload) => {
   return axios.post(`${URL}/users/uploadVideo`, payload);
};
export const uploadTempVideoAPI = (payload) => {
   return axios.put(`${URL}/users/uploadTempVideo`, payload, {
      headers: {
         'Content-Type': 'multipart/form-data',
      },
   });
};
export const deleteUploadTempVideoAPI = (payload) => {
   return axios.put(`${URL}/users/deleteUploadTempVideo`, payload);
};

//Call directly
export const getVideosByNickNameAPI = (payload) => {
   return axios.get(`${URL}/users/getVideosByNickName`, { params: { nickName: payload } });
};
export const getOneVideoByVideoName = (payload) => {
   return axios.get(`${URL}/users/getOneVideoByVideoName`, { params: { video: payload } });
};
export const setActiveAccount = (payload) => {
   axios.put(`${URL}/users/activeAccount`, payload);
};
export const userAvatar = (payload) => {
   return `${URL}/uploads/avatar/${payload}`;
};
export const userTempVideo = (payload) => {
   return `${URL}/uploads/video/${payload}`;
};
export const userVideoLink = (payload) => {
   return `${URL}/uploads/video/${payload}`;
};
export const updateVideoCommentAPI = (payload) => {
   return axios.post(`${URL}/users/updateVideoComment`, payload);
};
export const getOneUserByNameAPI = (payload) => {
   return axios.get(`${URL}/users/getOneUserByName`, {
      params: {
         nickName: payload,
      },
   });
};
