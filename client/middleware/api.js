import { USE_API } from '../actions';

const api = store => next => action => {
  if (action.type !== USE_API) return next(action);

  const { api } = action;
  const key = store.getState().login.key;

  const config = {
    method: api.method,
    headers: {
      'Content-Type': 'application/json',
      'x-lav-api-key': key,
    },
  };

  if (api.data) {
    config.body = JSON.stringify(api.data);
  }

  return fetch(`/api/${api.path}`, config)
    .then(res => res.json());
};

export default api;
