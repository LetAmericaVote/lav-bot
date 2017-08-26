import { combineReducers } from 'redux';
import login from './login';
import objects from './objects';

export const initialState = {
  login: {
    pending: false,
    key: null,
    error: null,
  },
  objects: {
    card: [],
    flow: [],
    path: [],
    node: [],
  },
};

const rootReducer = combineReducers({
  login, objects,
});

export default rootReducer;
