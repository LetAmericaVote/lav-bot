import { FETCH } from '../actions';

export const ADD_PATHS = 'ADD_PATHS';
export const UPDATE_PATH = 'UPDATE_PATH';

export function addPaths(paths) {
  return { type: ADD_NODE_PATHS, paths };
}

export function getNodePaths(nodeId) {
  return (dispatch) => (
    dispatch({
      type: FETCH,
      api: {
        path: `v1/path/from/${nodeId}`,
        method: 'get',
      },
    })
    .then(paths => dispatch(addPaths(paths)))
  );
}

export function updatePath(id, path) {
  return (dispatch) => {
    dispatch({
      type: FETCH,
      api: {
        path: `v1/path/${id}`,
        method: 'put',
        data: path,
      },
    })
    .then(node => dispatch({ type: UPDATE_PATH, id, path }))
  };
}
