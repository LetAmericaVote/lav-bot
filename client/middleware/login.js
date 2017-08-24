import {
  LOGIN, loginPending, loginSuccess, loginFailed,
} from '../actions';

const auth = store => next => action => {
  if (action.type !== LOGIN) return next(action);

  store.dispatch(loginPending());

  const body = JSON.stringify({
    username: action.username,
    password: action.password,
  });

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  };

  fetch('/api/auth', config)
    .then(res => {
      if (res.status !== 200) {
        store.dispatch(loginFailed('Invalid username or password'));
        return null;
      }

      return res.json();
    })
    .then(res => {
      if (! res) {
        store.dispatch(loginFailed('The application had an error. Try again?'));
        return;
      }

      sessionStorage.setItem('auth', body);
      store.dispatch(loginSuccess(res.key));
    });
};

export default auth;
