import { INIT_STATE } from 'constant';
import { getType, getUsers, createUser } from 'redux/actions/usersActions/usersActions';

export default function allUserReducers(state = INIT_STATE.allUser, action) {
   switch (action.type) {
      case getType(getUsers.getUsersRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(getUsers.getUsersSuccess):
         return {
            ...state,
            isLoading: false,
            data: action.payload,
         };
      case getType(getUsers.getUsersFailure):
         return {
            ...state,
            isLoading: true,
         };
      case getType(createUser.createUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(createUser.createUserSuccess):
         return {
            ...state,
            isLoading: false,
         };
      case getType(createUser.createUserFailure):
         return {
            ...state,
            isLoading: true,
         };
      default:
         return state;
   }
}
