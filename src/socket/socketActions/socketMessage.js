import socket from 'socket/connectSocket';
import { messageAction } from 'redux/actions/messageActions/messageActions';

const socketMessage = (dispatch) => {
   socket.on('updateMessage', () => {
      console.log('Active');
      dispatch(messageAction.getMessageRequest());
   });
};

export default socketMessage;
