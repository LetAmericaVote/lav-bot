import {
  LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILED,
} from '../actions';

const auth = (state = {}, action) => {
  switch(action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
        key: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        key: action.key,
        error: null,
        pending: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        pending: false,
        key: null,
      };
    default: return state;
  }
}

export default auth;
