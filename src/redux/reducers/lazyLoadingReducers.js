import { INIT_STATE } from 'constant';
import { lazyLoadingActions, getType } from 'redux/actions/LazyLoading/LazyLoadingActions';

export default function lazyLoadingReducers(state = INIT_STATE.lazyLoading, action) {
   switch (action.type) {
      case getType(lazyLoadingActions.setMaxVideo):
         return {
            ...state,
            maxVideo: action.payload,
         };
      case getType(lazyLoadingActions.increaseVideoRequest):
         return {
            ...state,
            loading: true,
         };
      case getType(lazyLoadingActions.increaseVideoSuccess):
         return {
            ...state,
            loading: false,
            pending: true,
            currentVideo: state.currentVideo + 1,
         };
      case getType(lazyLoadingActions.increaseVideoFailure):
         return {
            ...state,
            loading: false,
         };
      case getType(lazyLoadingActions.setPending):
         return {
            ...state,
            pending: false,
         };

      default:
         return state;
   }
}
