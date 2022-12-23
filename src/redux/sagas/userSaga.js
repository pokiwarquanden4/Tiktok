//Sau khi thực hiện action thì action đó sẽ nhảy vào trong saga (middleware)
//Khi call 1 API có thể mất nhiều thời gian do nhiều nguyên nhân khiến người dùng call liên tục, takeLatest sẽ nhận lần call cuối cùng
//put sẽ chọc vào trong file reducers/post để thực hiện lệnh
import { takeLatest, call, put } from 'redux-saga/effects';
import { activeUser, recommendUser } from 'redux/actions/usersActions/usersActions';
import {
   activeAccount,
   recommendUserAPI,
   uploadVideoAPI,
   uploadTempVideoAPI,
   deleteUploadTempVideoAPI,
   logoutUserAPI,
   updateVideoCommentAPI,
   getVideoAPI,
   createMessageAPI,
   getMessageAPI,
   upDateMessageAPI,
   followUserAPI,
   editUserAPI,
   unFollowUserAPI,
} from 'api';
import { videoActions } from 'redux/actions/VideoActions/VideoActions';
import { messageAction } from 'redux/actions/messageActions/messageActions';
import socket from 'socket/connectSocket';
import { lazyLoadingActions } from 'redux/actions/LazyLoading/LazyLoadingActions';

function* activeUserSaga(action) {
   try {
      const user = yield call(activeAccount, action.payload);
      yield put(activeUser.activeUserSuccess(user.data));
   } catch (err) {
      yield put(activeUser.activeUserFailure(err.response.data));
   }
}
function* recommendUserSaga(action) {
   try {
      const user = yield call(recommendUserAPI, action.payload);
      yield put(recommendUser.recommendUserSuccess(user.data));
   } catch (err) {
      yield put(recommendUser.recommendUserSuccess(err));
   }
}
function* uploadTempVideoSaga(action) {
   try {
      const user = yield call(uploadTempVideoAPI, action.payload);
      yield put(activeUser.getUploadTempVideoSuccess(user.data));
   } catch (err) {
      yield put(activeUser.getUploadTempVideoFailure(err));
   }
}
function* deleteUploadTempVideoSaga(action) {
   try {
      const user = yield call(deleteUploadTempVideoAPI, action.payload);
      yield put(activeUser.deleteUploadTempVideoSuccess(user.data));
   } catch (err) {
      yield put(activeUser.deleteUploadTempVideoFailure(err));
   }
}
function* uploadVideo(action) {
   try {
      const user = yield call(uploadVideoAPI, action.payload);
      yield put(activeUser.getUploadVideoSuccess(user.data));
   } catch (err) {
      yield put(activeUser.getUploadVideoFailure(err));
   }
}

function* getVideoSaga(action) {
   try {
      const user = yield call(getVideoAPI, action.payload);
      yield put(videoActions.getVideoSuccess(user.data));
   } catch (err) {
      yield put(videoActions.getVideoFailure(err));
   }
}

function* logoutUserSaga(action) {
   try {
      const user = yield call(logoutUserAPI, action.payload);
      yield put(activeUser.logoutUserSuccess(user.data));
   } catch (err) {
      yield put(activeUser.logoutUserFailure(err));
   }
}

function* getMessageSaga(action) {
   try {
      const result = yield call(getMessageAPI, action.payload);
      yield put(messageAction.getMessageSuccess(result.data));
   } catch (err) {
      yield put(messageAction.getMessageFailure(err));
   }
}

function* createMessageSaga(action) {
   try {
      const result = yield call(createMessageAPI, action.payload);
      yield put(messageAction.createMessageSuccess(result.data));
      yield put(activeUser.addMessageRoomSuccess(result.data._id));
   } catch (err) {
      yield put(messageAction.createMessageFailure(err));
   }
}

function* updateVideoCommentSaga(action) {
   try {
      const user = yield call(updateVideoCommentAPI, action.payload);
      if (!user.data.reset) {
         socket.emit('updateMessageVideo', user.data.updatedVideo.video);
      }
      yield put(videoActions.updateCommentSuccess(user.data));
   } catch (err) {
      yield put(videoActions.updateCommentFailure(err));
   }
}

function* updateMessageSaga(action) {
   try {
      const result = yield call(upDateMessageAPI, action.payload);
      if (result.data) {
         socket.emit('updateMessage');
      }
      yield put(messageAction.updateMessageSuccess(result.data));
   } catch (err) {
      yield put(messageAction.updateMessageFailure(err));
   }
}

function* followUserSaga(action) {
   try {
      const result = yield call(followUserAPI, action.payload);
      yield put(activeUser.followUserSuccess(result.data));
   } catch (err) {
      yield put(activeUser.followUserFailure(err));
   }
}
function* unFollowUserSaga(action) {
   try {
      const result = yield call(unFollowUserAPI, action.payload);
      yield put(activeUser.unFollowUserSuccess(result.data));
   } catch (err) {
      yield put(activeUser.unFollowUserFailure(err));
   }
}
function* editUserSaga(action) {
   try {
      const result = yield call(editUserAPI, action.payload);
      window.location.reload();
      yield put(activeUser.editUserSuccess(result.data));
   } catch (err) {
      yield put(activeUser.editUserFailure(err));
   }
}

function* increaseVideoSaga(action) {
   try {
      yield put(lazyLoadingActions.increaseVideoSuccess());
   } catch (err) {
      yield put(lazyLoadingActions.increaseVideoFailure(err));
   }
}

function* mySaga() {
   yield takeLatest(activeUser.activeUserRequest, activeUserSaga);
   yield takeLatest(activeUser.editUserRequest, editUserSaga);
   yield takeLatest(recommendUser.recommendUserRequest, recommendUserSaga);
   yield takeLatest(activeUser.getUploadTempVideoRequest, uploadTempVideoSaga);
   yield takeLatest(activeUser.getUploadVideoRequest, uploadVideo);
   yield takeLatest(activeUser.deleteUploadTempVideoRequest, deleteUploadTempVideoSaga);
   yield takeLatest(videoActions.getVideoRequest, getVideoSaga);
   yield takeLatest(videoActions.updateCommentRequest, updateVideoCommentSaga);
   yield takeLatest(activeUser.logoutUserRequest, logoutUserSaga);
   yield takeLatest(activeUser.followUserRequest, followUserSaga);
   yield takeLatest(activeUser.unFollowUserRequest, unFollowUserSaga);
   yield takeLatest(messageAction.getMessageRequest, getMessageSaga);
   yield takeLatest(messageAction.createMessageRequest, createMessageSaga);
   yield takeLatest(messageAction.updateMessageRequest, updateMessageSaga);
   yield takeLatest(lazyLoadingActions.increaseVideoRequest, increaseVideoSaga);
}

export default mySaga;
