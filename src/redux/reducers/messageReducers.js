import { INIT_STATE } from 'constant';
import { messageAction, getType } from 'redux/actions/messageActions/messageActions';

export default function messageReducer(state = INIT_STATE.message, action) {
   switch (action.type) {
      case getType(messageAction.getMessageRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(messageAction.getMessageSuccess):
         return {
            ...state,
            messageList: action.payload,
            isLoading: false,
         };
      case getType(messageAction.getMessageFailure):
         return {
            ...state,
            isLoading: false,
         };
      case getType(messageAction.createMessageRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(messageAction.createMessageSuccess):
         return {
            ...state,
            messageList: [...state.messageList, action.payload],
            isLoading: false,
         };
      case getType(messageAction.createMessageFailure):
         return {
            ...state,
            isLoading: false,
         };
      case getType(messageAction.updateMessageRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(messageAction.updateMessageSuccess):
         return {
            ...state,
            messageList: action.payload,
            isLoading: false,
         };
      case getType(messageAction.updateMessageFailure):
         return {
            ...state,
            isLoading: false,
         };

      default:
         return state;
   }
}
