import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
   return reduxAction().type;
};

export const uploadTemVideo = createActions({
   getUploadTemVideoRequest: (payload) => payload,
   getUploadTemVideoSuccess: (payload) => payload,
   getUploadTemVideoFailure: (err) => err,
});
