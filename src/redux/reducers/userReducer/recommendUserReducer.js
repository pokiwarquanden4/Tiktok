import { INIT_STATE } from 'constant';
import { getType, recommendUser } from 'redux/actions/usersActions/usersActions';

export default function recommendUserReducer(state = INIT_STATE.recommendUser, action) {
   switch (action.type) {
      case getType(recommendUser.recommendUserRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(recommendUser.recommendUserSuccess):
         return {
            ...state,
            isLoading: false,
            data: action.payload,
         };
      case getType(recommendUser.recommendUserFailure):
         return {
            ...state,
            isLoading: true,
         };

      default:
         return state;
   }
}
