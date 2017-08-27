import {
  useApi, addObjects, createObject,
  pushObjectUpdate, deleteRemoteObject, deleteCard,
} from '../actions';

export const NODE_OBJECT_TYPE = 'node';

export function addNode(node) {
  return (dispatch) => dispatch(createObject(NODE_OBJECT_TYPE, node));
}

export function getFlowNodes(flowId) {
  return (dispatch) => {
    dispatch(useApi({
      path: `v1/node/flow/${flowId}`,
      method: 'get',
    }))
    .then(nodes => dispatch(addObjects(NODE_OBJECT_TYPE, nodes)));
  };
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
