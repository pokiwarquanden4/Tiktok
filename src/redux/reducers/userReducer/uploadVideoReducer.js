import { INIT_STATE } from 'constant';
import { uploadTemVideo, getType } from 'redux/actions/usersActions/uploadVideoActions';

export default function uploadTemVideoReducer(state = INIT_STATE.uploadTemVideo, action) {
   switch (action.type) {
      case getType(uploadTemVideo.getUploadTemVideoRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(uploadTemVideo.getUploadTemVideoSuccess):
         return {
            ...state,
            isLoading: false,
            data: action.payload,
         };
      case getType(uploadTemVideo.getUploadTemVideoFailure):
         return {
            ...state,
            isLoading: true,
         };

      default:
         return state;
   }
}
