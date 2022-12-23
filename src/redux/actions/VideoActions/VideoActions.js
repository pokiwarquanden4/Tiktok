import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};
export const videoActions = createActions({
   getVideoRequest: (payload) => payload,
   getVideoSuccess: (payload) => payload,
   getVideoFailure: (err) => err,

   removeVideoSuccess: undefined,

   updateCommentRequest: (payload) => payload,
   updateCommentSuccess: (payload) => payload,
   updateCommentFailure: (err) => err,
});
