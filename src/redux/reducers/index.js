import { combineReducers } from 'redux';
import getUserByNameReducers from './userReducer/getUserByNameReducers';
import inputZoneReducer from './userReducer/InputZoneReducer';
import allUserReducers from './userReducer/allUserReducer';
import activeUserReducers from './userReducer/activeUserReducer';
import recommendUserReducer from './userReducer/recommendUserReducer';
import followingUserReducer from './userReducer/followingUserReducer';

export default combineReducers({
   getUserByNameReducers,
   inputZoneReducer,
   allUserReducers,
   activeUserReducers,
   recommendUserReducer,
   followingUserReducer,
});
