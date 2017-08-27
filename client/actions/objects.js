import { useApi } from '../actions';

export const ADD_OBJECT = 'ADD_OBJECT';
export const ADD_OBJECTS = 'ADD_OBJECTS';
export const UPDATE_OBJECT = 'UPDATE_OBJECT';
export const DELETE_OBJECT = 'DELETE_OBJECT';

export function addObject(objectType, object) {
  return { type: ADD_OBJECT, objectType, object };
}

export function addObjects(objectType, objects) {
  return { type: ADD_OBJECTS, objectType, objects };
}

export function updateObject(objectType, object) {
  return { type: UPDATE_OBJECT, objectType, object };
}

export function deleteObject(objectType, objectId) {
  return { type: DELETE_OBJECT, objectType, objectId };
}

export function createObject(objectType, data) {
  return (dispatch) => (
    dispatch(useApi({
      path: `v1/${objectType}`,
      method: 'post',
      data,
    }))
  )
  .then(created => dispatch(addObject(objectType, created)));
}

export function retrieveObject(objectType, objectId) {
  return (dispatch) => (
    dispatch(useApi({
      path: `v1/${objectType}/${objectId}`,
      method: 'get'
    }))
  )
  .then(found => dispatch(addObject(objectType, found)));
}

export function retrieveObjects(objectType) {
  return (dispatch) => (
    dispatch(useApi({
      path: `v1/${objectType}`,
      method: 'get',
    }))
  )
  .then(foundObjects => dispatch(addObjects(objectType, foundObjects)));
}

export function pushObjectUpdate(objectType, data) {
  return (dispatch) => (
    dispatch(useApi({
      path: `v1/${objectType}/${data._id}`,
      method: 'put',
      data,
    }))
  )
  .then(object => dispatch(updateObject(objectType, object)));
}

export function deleteRemoteObject(objectType, objectId) {
  return (dispatch) => (
    dispatch(useApi({
      path: `v1/${objectType}/${objectId}`,
      method: 'delete',
    }))
  )
  .then(() => dispatch(deleteObject(objectType, objectId)));
}
