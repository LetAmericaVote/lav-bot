import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer, { initialState } from './reducers';
import { auth } from './actions';
import App from './components/App';
import './base.scss';

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));
const sessionCredentials = sessionStorage.getItem('auth');
if (sessionCredentials) {
  const { username, password } = JSON.parse(sessionCredentials);
  store.dispatch(auth(username, password));
}

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('jsx-root'));
