import { INIT_STATE } from 'constant';
import { getType, inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';

export default function inputZoneReducer(state = INIT_STATE.inputZone, action) {
   switch (action.type) {
      case getType(inputZone.hideLoginSignUp):
         return {
            ...state,
            loginSignUp: true,
         };
      case getType(inputZone.showLoginSignUp):
         return {
            ...state,
            loginSignUp: false,
         };
      case getType(inputZone.hideEditUser):
         return {
            ...state,
            editUser: true,
         };
      case getType(inputZone.showEditUser):
         return {
            ...state,
            editUser: false,
         };
      case getType(inputZone.hideComingSoon):
         return {
            ...state,
            comingSoon: true,
         };
      case getType(inputZone.showComingSoon):
         return {
            ...state,
            comingSoon: false,
         };
      default:
         return state;
   }
}
