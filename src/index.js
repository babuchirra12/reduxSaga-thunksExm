import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import axios from 'axios';
import { Provider } from 'react-redux';
// import {combinReducers, createStore, applyMiddleware} from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
// import store from './store/store'
import myFirstReducer from "./reducer"
import mySaga from "./sagas"
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/api';


// redux saga exm===>

import createSagaMiddleware from 'redux-saga';
const rootReducer = combineReducers({myFirstReducer})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(mySaga);
// redux thunks exm===>
// import thunk from 'redux-thunk';
// const rootReducer = combineReducers({myFirstReducer})
// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);