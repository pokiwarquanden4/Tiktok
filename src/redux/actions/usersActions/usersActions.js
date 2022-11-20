import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};

export const getUsers = createActions({
   getUsersRequest: undefined,
   getUsersSuccess: (payload) => payload,
   getUsersFailure: (err) => err,
});

export const getUsersByName = createActions({
   getUsersByNameRequest: (payload) => payload,
   getUsersByNameSuccess: (payload) => payload,
   getUsersByNameFailure: (err) => err,
});

export const createUser = createActions({
   createUserRequest: (payload) => payload,
   createUserSuccess: (payload) => payload,
   createUserFailure: (err) => err,
});
export const activeUser = createActions({
   getUploadTempVideoRequest: (payload) => payload,
   getUploadTempVideoSuccess: (payload) => payload,
   getUploadTempVideoFailure: (err) => err,

   deleteUploadTempVideoRequest: (payload) => payload,
   deleteUploadTempVideoSuccess: (payload) => payload,
   deleteUploadTempVideoFailure: (err) => err,

   getUploadVideoRequest: (payload) => payload,
   getUploadVideoSuccess: (payload) => payload,
   getUploadVideoFailure: (err) => err,

   activeUserRequest: (payload) => payload,
   activeUserSuccess: (payload) => payload,
   activeUserFailure: (err) => err,
});
export const recommendUser = createActions({
   recommendUserRequest: undefined,
   recommendUserSuccess: (payload) => payload,
   recommendUserFailure: (err) => err,
});
export const followingUser = createActions({
   followingUserRequest: (payload) => payload,
   followingUserSuccess: (payload) => payload,
   followingUserFailure: (err) => err,
});
