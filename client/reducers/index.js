import { combineReducers } from 'redux';
import login from './login';
import card from './card';

export const initialState = {
  login: {
    pending: false,
    key: null,
    error: null,
  },
  card: {},
};

const rootReducer = combineReducers({
  login, card,
});

export default rootReducer;
