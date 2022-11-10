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
         return {
            ...state,
            isLoading: false,
            login: true,
            data: action.payload,
         };
      case getType(activeUser.activeUserFailure):
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
            data: { ...state.data, video: [...state.data.video, action.payload] },
         };
      case getType(activeUser.getUploadVideoFailure):
         return {
            ...state,
            isLoading: true,
         };

      default:
         return state;
   }
}
