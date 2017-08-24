import { FETCH, deleteCard } from '../actions';

export const RETRIEVE_FLOWS = 'RETRIEVE_FLOWS';
export const RECIEVED_FLOWS = 'RECIEVED_FLOWS';
export const RECIEVED_FLOWS_ERROR = 'RECIEVED_FLOWS_ERROR';

export const ADD_FLOW = 'ADD_FLOW';
export const UPDATE_FLOW = 'UPDATE_FLOW';
export const DELETE_FLOW = 'DELETE_FLOW';

export function recievedFlows(flows) {
  return { type: RECIEVED_FLOWS, flows };
}

export function recievedFlowsError(error) {
  return { type: RECIEVED_FLOWS_ERROR, error };
}

export function retrieveFlows() {
  return (dispatch) => {
    dispatch({
      type: FETCH,
      api: {
        path: 'v1/flow',
        method: 'get',
      },
    })
    .then(flows => dispatch(recievedFlows(flows)));
  };
}

export function addFlow(flow) {
  return (dispatch) => {
    dispatch({
      type: FETCH,
      api: {
        path: 'v1/flow',
        method: 'post',
        data: flow,
      },
    })
    .then(flow => dispatch(recievedFlows([flow])));
  };
}

export function updateFlow(id, props) {

}

export function deleteFlow(id) {
  return (dispatch) => {
    dispatch({
      type: FETCH,
      api: {
        path: `v1/flow/${id}`,
        method: 'delete',
      },
    })
    .then(() => dispatch({ type: DELETE_FLOW, id }))
    .then(() => dispatch(deleteCard(id)));
  };
}
