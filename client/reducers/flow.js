import {
  RETRIEVE_FLOWS, RECIEVED_FLOWS, RECIEVED_FLOWS_ERROR,
  UPDATE_FLOW, DELETE_FLOW,
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
    case UPDATE_FLOW:
      return {
        ...state,
        items: state.items.map(flow => flow._id === action.id ? action.flow : flow),
      };
    case DELETE_FLOW:
      return {
        ...state,
        items: state.items.filter(flow => flow._id !== action.id)
      };
    default: return state;
  }
}

export default flow;
