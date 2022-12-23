import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};
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

   followUserRequest: (payload) => payload,
   followUserSuccess: (payload) => payload,
   followUserFailure: (err) => err,

   unFollowUserRequest: (payload) => payload,
   unFollowUserSuccess: (payload) => payload,
   unFollowUserFailure: (err) => err,

   addMessageRoomRequest: (payload) => payload,
   addMessageRoomSuccess: (payload) => payload,
   addMessageRoomFailure: (err) => err,

   activeUserRequest: (payload) => payload,
   activeUserSuccess: (payload) => payload,
   activeUserFailure: (err) => err,

   editUserRequest: (payload) => payload,
   editUserSuccess: (payload) => payload,
   editUserFailure: (err) => err,

   logoutUserRequest: (payload) => payload,
   logoutUserSuccess: (payload) => payload,
   logoutUserFailure: (err) => err,
});
export const recommendUser = createActions({
   recommendUserRequest: (payload) => payload,
   recommendUserSuccess: (payload) => payload,
   recommendUserFailure: (err) => err,
});
