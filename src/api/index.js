import axios from 'axios';

const URL = process.env.REACT_APP_URL;

//Using Redux Store
export const createUserAPI = (payload) => {
   return axios.post(`${URL}/users/createUser`, payload);
};

export const editUserAPI = (payload) => {
   return axios.put(`${URL}/users/editUser`, payload);
};

export const activeAccount = (payload, token) => {
   return axios.get(`${URL}/users/activeAccount`, {
      params: payload,
      headers: { token: `Bearer ${token}` },
   });
};
export const recommendUserAPI = (payload) => {
   return axios.get(`${URL}/users/recommendUser`, { params: { nickName: payload } });
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

export const updateVideoCommentAPI = (payload) => {
   return axios.post(`${URL}/users/updateVideoComment`, payload);
};

export const logoutUserAPI = (payload) => {
   return axios.put(`${URL}/users/logoutUser`, payload);
};

export const getVideoAPI = (payload) => {
   //input: Array
   return axios.post(`${URL}/users/getVideo`, payload);
};
export const createMessageAPI = (payload) => {
   return axios.post(`${URL}/users/createMessage`, payload);
};
export const getMessageAPI = (payload) => {
   return axios.get(`${URL}/users/getMessage`);
};

export const seenMessageAPI = (payload) => {
   return axios.put(`${URL}/users/seenMessage`, payload);
};

export const upDateMessageAPI = (payload) => {
   return axios.post(`${URL}/users/updateMessage`, payload);
};

//Call directly\
export const likeVideoAPI = (payload) => {
   return axios.put(`${URL}/users/likeVideo`, payload);
};
export const unLikeVideoAPI = (payload) => {
   return axios.put(`${URL}/users/unLikeVideo`, payload);
};
export const likeCommentVideoAPI = (payload) => {
   return axios.put(`${URL}/users/likeCommentVideo`, payload);
};
export const unLikeCommentVideoAPI = (payload) => {
   return axios.put(`${URL}/users/unLikeCommentVideo`, payload);
};

export const getVideosByNickNameAPI = (payload) => {
   return axios.get(`${URL}/users/getVideosByNickName`, { params: { nickName: payload } });
};
export const followUserAPI = (payload) => {
   return axios.put(`${URL}/users/followUser`, payload);
};
export const unFollowUserAPI = (payload) => {
   return axios.put(`${URL}/users/unFollowUser`, payload);
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

export const getOneUserByNameAPI = (payload) => {
   return axios.get(`${URL}/users/getOneUserByName`, {
      params: {
         nickName: payload,
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
