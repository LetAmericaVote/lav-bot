import {
  useApi, addObjects, createObject,
  pushObjectUpdate, deleteRemoteObject,
} from '../actions';

export const PATH_OBJECT_TYPE = 'path';

export function getNodePaths(nodeId) {
  return (dispatch) => (
    dispatch(useApi({
      path: `v1/path/from/${nodeId}`,
      method: 'get',
    }))
    .then(paths => dispatch(addObjects(PATH_OBJECT_TYPE, paths)))
  );
}

export function addPath(path) {
  return dispatch => dispatch(createObject(PATH_OBJECT_TYPE, path));
}

export function updatePath(path) {
  return dispatch => dispatch(pushObjectUpdate(PATH_OBJECT_TYPE, path));
}

export function deletePath(id) {
  return dispatch => dispatch(deleteRemoteObject(PATH_OBJECT_TYPE, id));
}
