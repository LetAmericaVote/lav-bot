import {
  retrieveObjects, createObject, pushObjectUpdate,
  deleteRemoteObject, deleteCard,
} from '../actions';

export const FLOW_OBJECT_TYPE = 'flow';

export function retrieveFlows() {
  return dispatch => dispatch(retrieveObjects(FLOW_OBJECT_TYPE));
}

export function addFlow(flow) {
  return dispatch => dispatch(createObject(FLOW_OBJECT_TYPE, flow));
}

export function updateFlow(flow) {
  return dispatch => dispatch(pushObjectUpdate(FLOW_OBJECT_TYPE, flow));
}

export function deleteFlow(id) {
  return (dispatch) => {
    dispatch(deleteCard(id));
    dispatch(deleteRemoteObject(FLOW_OBJECT_TYPE, id));
  };
}
