import { INIT_STATE } from 'constant';
import { videoActions, getType } from 'redux/actions/VideoActions/VideoActions';

export default function videoReducer(state = INIT_STATE.video, action) {
   switch (action.type) {
      case getType(videoActions.getVideoRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(videoActions.getVideoSuccess):
         return {
            ...state,
            nickName: action.payload.nickName,
            video: action.payload.video,
            isLoading: false,
         };
      case getType(videoActions.getVideoFailure):
         return {
            ...state,
            isLoading: false,
         };
      case getType(videoActions.removeVideoSuccess):
         return {
            ...state,
            nickName: [],
            video: [],
            isLoading: false,
         };
      case getType(videoActions.updateCommentRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(videoActions.updateCommentSuccess):
         const arr = state.video.map((vid) => {
            if (vid.video === action.payload.updatedVideo.video) {
               return action.payload.updatedVideo;
            } else {
               return vid;
            }
         });

         return {
            ...state,
            video: arr,
            isLoading: false,
         };
      case getType(videoActions.updateCommentFailure):
         return {
            ...state,
            isLoading: false,
         };

      default:
         return state;
   }
}
