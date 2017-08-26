import {
  ADD_PATHS,
} from '../actions';

const path = (state = {}, action) => {
  switch(action.type) {
    case ADD_PATHS:
      return {
        ...state,
        items: [...state.items, ...(action.paths || []).filter(path => {
          return state.items.findIndex(p => p._id === path._id) === -1;
        })],
      };

    // case UPDATE_PATH:
    //   return {
    //     ...state,
    //     items: state.items.map(node => (
    //       node._id === action.id ? action.node : node
    //     )),
    //   };

    default: return state;
  }
}

export default path;


/*
make a set of crud actions&reducers, delete most of what we have

data: {
 flows: [],
 nodes: [
  {
   _id: '',
  },
 ],
}
 */
