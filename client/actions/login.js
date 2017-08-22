export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function login(username, password) {
  return { type: LOGIN, username, password };
}

export function loginPending() {
  return { type: LOGIN_PENDING };
}

export function loginSuccess(key) {
  return { type: LOGIN_SUCCESS, key };
}

export function loginFailed(error) {
  return { type: LOGIN_FAILED, error };
}
