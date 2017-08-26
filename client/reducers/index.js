import { combineReducers } from 'redux';
import login from './login';
import flow from './flow';
import node from './node';
import path from './path';
import objects from './objects';

export const initialState = {
  login: {
    pending: false,
    key: null,
    error: null,
  },
  flow: {
    pending: false,
    error: null,
    items: [],
  },
  node: {
    items: [],
  },
  path: {
    items: [],
  },
  objects: {
    card: [],
    flow: [],
    path: [],
    node: [],
  },
};

const rootReducer = combineReducers({
  login, flow, node, path, objects,
});

export default rootReducer;
