import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};

export const messageAction = createActions({
   createMessageRequest: (payload) => payload,
   createMessageSuccess: (payload) => payload,
   createMessageFailure: (err) => err,

   getMessageRequest: (payload) => payload,
   getMessageSuccess: (payload) => payload,
   getMessageFailure: (err) => err,

   updateMessageRequest: (payload) => payload,
   updateMessageSuccess: (payload) => payload,
   updateMessageFailure: (err) => err,
});
