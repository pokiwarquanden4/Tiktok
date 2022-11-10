import { INIT_STATE } from 'constant';
import { getType, followingUser } from 'redux/actions/usersActions/usersActions';

export default function followingUserReducer(state = INIT_STATE.followingUser, action) {
   switch (action.type) {
      case getType(followingUser.followingUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(followingUser.followingUserSuccess):
         return {
            ...state,
            isLoading: false,
            data: action.payload,
         };
      case getType(followingUser.followingUserFailure):
         return {
            ...state,
            isLoading: true,
         };

      default:
         return state;
   }
}
