import { INIT_STATE } from 'constant';
import { getType, activeUser } from 'redux/actions/usersActions/usersActions';

export default function activeUserReducers(state = INIT_STATE.activeUser, action) {
   switch (action.type) {
      case getType(activeUser.activeUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.activeUserSuccess):
         localStorage.setItem('refreshToken', action.payload.refreshJWT);
         return {
            ...state,
            isLoading: false,
            login: true,
            wrong: null,
            data: action.payload.user,
            jwt: action.payload.jwt,
         };
      case getType(activeUser.activeUserFailure):
         return {
            ...state,
            wrong: action.payload,
            isLoading: true,
         };
      case getType(activeUser.logoutUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.logoutUserSuccess):
         return {
            ...state,
            isLoading: false,
            login: false,
            data: {},
            jwt: null,
         };
      case getType(activeUser.logoutUserFailure):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.getUploadVideoRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.getUploadVideoSuccess):
         return {
            ...state,
            isLoading: false,
            data: {
               ...state.data,
               video: [...state.data.video, action.payload],
            },
         };
      case getType(activeUser.getUploadVideoFailure):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.getUploadTempVideoRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.getUploadTempVideoSuccess):
         return {
            ...state,
            isLoading: false,
            data: {
               ...state.data,
               uploadTempVideo: { ...state.data.uploadTempVideo, video: action.payload },
            },
         };
      case getType(activeUser.getUploadTempVideoFailure):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.deleteUploadTempVideoRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.deleteUploadTempVideoSuccess):
         return {
            ...state,
            isLoading: false,
            data: {
               ...state.data,
               uploadTempVideo: { ...state.data.uploadTempVideo, video: null },
            },
         };
      case getType(activeUser.deleteUploadTempVideoFailure):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.followUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.followUserSuccess):
         return {
            ...state,
            isLoading: false,
            data: {
               ...state.data,
               following: [...state.data.following, action.payload],
            },
         };
      case getType(activeUser.followUserFailure):
         return {
            ...state,
            isLoading: true,
         };

      case getType(activeUser.unFollowUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.unFollowUserSuccess):
         const newData = { ...state.data };
         newData.following.splice(newData.following.indexOf(action.payload), 1);

         return {
            ...state,
            isLoading: false,
            data: newData,
         };
      case getType(activeUser.unFollowUserFailure):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.addMessageRoomRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.addMessageRoomSuccess):
         return {
            ...state,
            isLoading: false,
            data: {
               ...state.data,
               message: [...state.data.message, action.payload],
            },
         };
      case getType(activeUser.addMessageRoomFailure):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.editUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(activeUser.editUserSuccess):
         return {
            ...state,
            isLoading: false,
            data: action.payload,
         };
      case getType(activeUser.editUserFailure):
         return {
            ...state,
            isLoading: true,
         };

      default:
         return state;
   }
}
