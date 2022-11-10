import { INIT_STATE } from 'constant';
import { getType, inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';

export default function inputZoneReducer(state = INIT_STATE.inputZone, action) {
   switch (action.type) {
      case getType(inputZone.hide):
         return {
            ...state,
            hide: true,
         };
      case getType(inputZone.show):
         return {
            ...state,
            hide: false,
         };
      default:
         return state;
   }
}
