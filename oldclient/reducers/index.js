import { combineReducers } from 'redux';
import auth from './auth';
import nodes from './nodes';

export const initialState = {
  auth: {
    key: null,
    error: null,
  },
  nodes: {
    items: [],
    menus: [],
    query: '',
  },
};

const rootReducer = combineReducers({
  auth, nodes,
});

export default rootReducer;
