import socket from 'socket/connectSocket';
import { videoActions } from 'redux/actions/VideoActions/VideoActions';

const socketMessageVideo = (dispatch, video) => {
   socket.on(`updateMessageVideo/${video.video}`, () => {
      dispatch(videoActions.updateCommentRequest(video));
   });
};

export default socketMessageVideo;
