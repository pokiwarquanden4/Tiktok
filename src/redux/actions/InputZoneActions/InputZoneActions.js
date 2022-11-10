import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};

export const inputZone = createActions({
   hide: undefined,
   show: undefined,
});
