import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import inputZoneReducer from './userReducer/InputZoneReducer';
import activeUserReducers from './userReducer/activeUserReducer';
import recommendUserReducer from './userReducer/recommendUserReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mySaga from 'redux/sagas/userSaga';
import videoReducer from './videoReducers';
import messageReducer from './messageReducers';
import lazyLoadingReducers from './lazyLoadingReducers';

const rootReducer = combineReducers({
   inputZoneReducer,
   activeUserReducers,
   recommendUserReducer,
   videoReducer,
   messageReducer,
   lazyLoadingReducers,
});

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['inputZoneReducer', 'recommendUserReducer', 'videoReducer', 'lazyLoadingReducers'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const persistor = persistStore(store);

export { persistor, store };
