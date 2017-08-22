import {
  AUTH_SUCCESS, AUTH_ERROR,
} from '../actions';

const auth = (state = {}, action) => {
  switch(action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        key: action.key,
        error: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
}

export default auth;
