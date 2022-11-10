import { INIT_STATE } from 'constant';
import { getType, getUsersByName } from 'redux/actions/usersActions/usersActions';

export default function getUserByNameReducers(state = INIT_STATE.usersSearch, action) {
   switch (action.type) {
      case getType(getUsersByName.getUsersByNameRequest):
         return {
            ...state,
            isLoading: true,
         };
      case getType(getUsersByName.getUsersByNameSuccess):
         return {
            ...state,
            isLoading: false,
            data: action.payload,
         };
      case getType(getUsersByName.getUsersByNameFailure):
         return {
            ...state,
            isLoading: true,
         };

      default:
         return state;
   }
}
