export const AUTH = 'AUTH';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

import { getTriggerNodes } from '../actions';

export function auth(username, password) {
  return dispatch => {
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password,
      })
    })
    .then(res => {
      if (res.status !== 200) {
        dispatch(authError('Invalid username or password'));
        return;
      }

      res.json().then(body => {
        if (! body) {
          dispatch(authError('The application had an error. Try again?'));
          return;
        }

        sessionStorage.setItem('auth', JSON.stringify({ username, password }));
        dispatch(authSuccess(body.key));
        dispatch(getTriggerNodes());
      });
    })
    .catch(err => {
      console.error(err);
      dispatch(authError('The application had an error. Try again?'));
    })
  };
}

export function authSuccess(key) {
  return { type: AUTH_SUCCESS, key };
}

export function authError(error) {
  return { type: AUTH_ERROR, error };
}
