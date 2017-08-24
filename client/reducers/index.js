import { combineReducers } from 'redux';
import login from './login';
import card from './card';
import flow from './flow';

export const initialState = {
  login: {
    pending: false,
    key: null,
    error: null,
  },
  card: {
    items: {},
  },
  flow: {
    pending: false,
    error: null,
    items: [],
  },
};

const rootReducer = combineReducers({
  login, card, flow,
});

export default rootReducer;
