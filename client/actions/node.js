import {
  useApi, addObjects, createObject, retrieveObjects,
  pushObjectUpdate, deleteRemoteObject, deleteCard,
} from '../actions';

export const NODE_OBJECT_TYPE = 'node';

export function retrieveNodes() {
  return dispatch => dispatch(retrieveObjects(NODE_OBJECT_TYPE));
}

export function addNode(node) {
  return (dispatch) => dispatch(createObject(NODE_OBJECT_TYPE, node));
}

export function updateNode(node) {
  return (dispatch) => dispatch(pushObjectUpdate(NODE_OBJECT_TYPE, node));
}

export function deleteNode(id) {
  return (dispatch) => {
    dispatch(deleteCard(id));
    dispatch(deleteRemoteObject(NODE_OBJECT_TYPE, id));
  }
}
