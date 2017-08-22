import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer, { initialState } from './reducers';
import loginMiddleware from './middleware/login';
import { login } from './actions';

const store = createStore(reducer, initialState, applyMiddleware(thunk, loginMiddleware, logger));
const sessionCredentials = sessionStorage.getItem('auth');
if (sessionCredentials) {
  const { username, password } = JSON.parse(sessionCredentials);
  store.dispatch(login(username, password));
}

export default store;
