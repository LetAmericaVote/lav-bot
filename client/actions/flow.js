import { FETCH } from '../actions';

export const RETRIEVE_FLOWS = 'RETRIEVE_FLOWS';
export const RECIEVED_FLOWS = 'RECIEVED_FLOWS';
export const RECIEVED_FLOWS_ERROR = 'RECIEVED_FLOWS_ERROR';

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
  }
}
