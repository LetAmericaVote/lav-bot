import {
  ADD_NODES, UPDATE_NODE,
  SHOW_NODE_MENU, HIDE_NODE_MENU, SEARCH_NODE_MENU,
} from '../actions';

const nodes = (state = {}, action) => {
  switch(action.type) {
    case ADD_NODES:
      return {
        ...state,
        items: [...action.nodes, ...state.items],
      };
    case UPDATE_NODE:
      return {
        ...state,
        items: state.items.map(node =>
          node._id === action.id ? ({ ...node, ...action.data }) : node
        ),
      };
    case SHOW_NODE_MENU:
      const { nodeId } = action;
      const menus = [...state.menus];
      if (menus.indexOf(nodeId) === -1) menus.push(action.nodeId);

      return {
        ...state,
        menus,
      };
    case HIDE_NODE_MENU:
      return {
        ...state,
        menus: state.menus.filter(id => id !== action.nodeId),
      };
    case SEARCH_NODE_MENU:
      return {
        ...state,
        query: action.query,
      };
    default: return state;
  }
}

export default nodes;
