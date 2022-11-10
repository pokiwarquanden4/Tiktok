//Sau khi thực hiện action thì action đó sẽ nhảy vào trong saga (middleware)
//Khi call 1 API có thể mất nhiều thời gian do nhiều nguyên nhân khiến người dùng call liên tục, takeLatest sẽ nhận lần call cuối cùng
//put sẽ chọc vào trong file reducers/post để thực hiện lệnh
import { takeLatest, call, put } from 'redux-saga/effects';
import {
   getUsers,
   getUsersByName,
   createUser,
   activeUser,
   recommendUser,
   followingUser,
} from 'redux/actions/usersActions/usersActions';
import { uploadTemVideo } from 'redux/actions/usersActions/uploadVideoActions';
import {
   fetchUsers,
   fetchUsersByName,
   createUserAPI,
   activeAccount,
   recommendUserAPI,
   followingUserAPI,
   uploadVideoAPI,
   uploadTemVideoAPI,
} from 'api';

function* fetchUserSaga(action) {
   try {
      //Lay dữ liệu từ DTB
      const user = yield call(fetchUsers);
      //Thực hiện actions
      yield put(getUsers.getUsersSuccess(user.data));
   } catch (err) {
      yield put(getUsers.getUsersFailure(err));
   }
}
function* fetchUsersByNameSaga(action) {
   try {
      const user = yield call(fetchUsersByName, action.payload);
      yield put(getUsersByName.getUsersByNameSuccess(user.data));
   } catch (err) {
      yield put(getUsersByName.getUsersByNameFailure(err));
   }
}

function* createUserSaga(action) {
   try {
      const user = yield call(createUserAPI, action.payload);
      yield put(createUser.createUserSuccess(user.data));
   } catch (err) {
      yield put(createUser.createUserFailure(err));
   }
}
function* activeUserSaga(action) {
   try {
      const user = yield call(activeAccount, action.payload);
      yield put(activeUser.activeUserSuccess(user.data));
   } catch (err) {
      yield put(activeUser.activeUserFailure(err));
   }
}
function* recommendUserSaga(action) {
   try {
      const user = yield call(recommendUserAPI);
      yield put(recommendUser.recommendUserSuccess(user.data));
   } catch (err) {
      yield put(recommendUser.recommendUserSuccess(err));
   }
}
function* followingUserSaga(action) {
   try {
      const user = yield call(followingUserAPI, action.payload);
      yield put(followingUser.followingUserSuccess(user.data));
   } catch (err) {
      yield put(followingUser.followingUserFailure(err));
   }
}
function* uploadTemVideoSaga(action) {
   try {
      const user = yield call(uploadTemVideoAPI, action.payload);
      yield put(uploadTemVideo.getUploadTemVideoSuccess(user.data));
   } catch (err) {
      yield put(uploadTemVideo.getUploadTemVideoFailure(err));
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

function* mySaga() {
   //Lưu ý khi gọi đến fetchUsersByNameSaga thì vẫn sẽ được truyền tham số mà getUsersRequest nhận dc
   yield takeLatest(getUsersByName.getUsersByNameRequest, fetchUsersByNameSaga);
   yield takeLatest(getUsers.getUsersRequest, fetchUserSaga);
   yield takeLatest(createUser.createUserRequest, createUserSaga);
   yield takeLatest(activeUser.activeUserRequest, activeUserSaga);
   yield takeLatest(recommendUser.recommendUserRequest, recommendUserSaga);
   yield takeLatest(followingUser.followingUserRequest, followingUserSaga);
   yield takeLatest(uploadTemVideo.getUploadTemVideoRequest, uploadTemVideoSaga);
   yield takeLatest(activeUser.getUploadVideoRequest, uploadVideo);
}

export default mySaga;
