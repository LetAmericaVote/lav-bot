import {
  ADD_NODE, ADD_NODES, UPDATE_NODE, DELETE_NODE,
} from '../actions';

const node = (state = {}, action) => {
  switch(action.type) {
    case ADD_NODE:
      return {
        ...state,
        items: [...state.items, action.node],
      };

    case ADD_NODES:
      return {
        ...state,
        items: [...state.items, ...action.nodes.filter(node => {
          return state.items.findIndex(n => n._id === node._id) === -1;
        })],
      };

    case UPDATE_NODE:
      return {
        ...state,
        items: state.items.map(node => (
          node._id === action.id ? action.node : node
        )),
      };

    case DELETE_NODE:
      return {
        ...state,
        items: state.items.filter(node => node._id !== action.id),
      };

    default: return state;
  }
}

export default node;
