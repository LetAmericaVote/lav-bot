import { combineReducers } from 'redux';
import login from './login';

export const initialState = {
  login: {
    pending: false,
    key: null,
    error: null,
  },
};

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
