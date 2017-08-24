import {
  RETRIEVE_FLOWS, RECIEVED_FLOWS, RECIEVED_FLOWS_ERROR,
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
    default: return state;
  }
}

export default flow;
