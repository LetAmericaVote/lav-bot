import {
  RETRIEVE_FLOWS, RECIEVED_FLOWS, RECIEVED_FLOWS_ERROR, DELETE_FLOW,
} from '../actions';

const flow = (state = {}, action) => {
  switch(action.type) {
    case RETRIEVE_FLOWS:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case RECIEVED_FLOWS:
      return {
        ...state,
        items: [...state.items, ...action.flows],
        error: null,
        pending: false,
      };
    case RECIEVED_FLOWS_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case DELETE_FLOW:
      const deleteIndex = state.items.findIndex(flow => flow._id === action.id);

      return {
        ...state,
        items: [
          ...state.items.slice(0, deleteIndex),
          ...state.items.slice(deleteIndex + 1)
        ],
      };
    default: return state;
  }
}

export default flow;
