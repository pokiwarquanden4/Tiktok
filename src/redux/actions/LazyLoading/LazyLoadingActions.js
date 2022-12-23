import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};
export const lazyLoadingActions = createActions({
   increaseVideoRequest: (payload) => payload,
   increaseVideoSuccess: (payload) => payload,
   increaseVideoFailure: (payload) => payload,

   setPending: undefined,

   setMaxVideo: (payload) => payload,
});
