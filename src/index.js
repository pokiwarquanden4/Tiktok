import React from 'react';
import ReactDOM from 'react-dom/client';
import AppCover from 'AppCover';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import mySaga from 'redux/sagas/userSaga';
import reducers from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <GlobalStyles>
         <AppCover></AppCover>
      </GlobalStyles>
   </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
