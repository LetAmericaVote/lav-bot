export function get(path, key) {
  return fetch(`/api/v1/${path}`, {
    headers: {
      'x-lav-api-key': key
    }
  })
  .then(res => res.json())
  .catch(console.error);
}

export function post(path, data, key) {
  return fetch(`/api/v1/${path}`, {
    method: 'POST',
    headers: {
      'x-lav-api-key': key,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .catch(console.error);
}

export function put(path, data, key) {
  return fetch(`/api/v1/${path}`, {
    method: 'PUT',
    headers: {
      'x-lav-api-key': key,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .catch(console.error);
}
