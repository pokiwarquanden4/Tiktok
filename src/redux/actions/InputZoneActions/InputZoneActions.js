import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};

export const inputZone = createActions({
   hideLoginSignUp: undefined,
   showLoginSignUp: undefined,

   hideEditUser: undefined,
   showEditUser: undefined,

   hideComingSoon: undefined,
   showComingSoon: undefined,
});
