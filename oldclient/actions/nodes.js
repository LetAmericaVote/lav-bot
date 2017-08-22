export const ADD_NODES = 'ADD_NODES';
export const UPDATE_NODE = 'UPDATE_NODE';
export const CREATE_NODE = 'CREATE_NODE';
export const SHOW_NODE_MENU = 'SHOW_NODE_MENU';
export const HIDE_NODE_MENU = 'HIDE_NODE_MENU';
export const SEARCH_NODE_MENU = 'SEARCH_NODE_MENU';

import { get, post, put } from '../api';

export function addNodes(nodes) {
  return { type: ADD_NODES, nodes };
}

export function getTriggerNodes() {
  return (dispatch, getState) => {
    const { auth } = getState();

    get('triggers', auth.key).then(nodes => dispatch(addNodes(nodes)));
  };
}

export function updateNode(id, data) {
  return (dispatch, getState) => {
    const { auth } = getState();

    put(`node/${id}`, data, auth.key).then(res => {
      if (res && res.nModified >= 1) {
        dispatch({ type: UPDATE_NODE, id, data });
      }
    });
  };
}

export function createNode() {
  return (dispatch, getState) => {
    const { auth } = getState();

    post('node', { message: 'placeholder copy' }, auth.key).then(res => {
      if (res && res._id) {
        dispatch(addNodes([res]));
        dispatch(showNodeMenu(res._id));
      }
    });
  };
}

export function showNodeMenu(nodeId) {
  return { type: SHOW_NODE_MENU, nodeId };
}

export function hideNodeMenu(nodeId) {
  return { type: HIDE_NODE_MENU, nodeId };
}

export function searchNodeMenu(query) {
  return { type: SEARCH_NODE_MENU, query };
}

export function addPath(source, target, keyword) {
  return (dispatch, getState) => {
    const { auth } = getState();
    const sourceNode = getState().nodes.items.find(({_id}) => _id === source);
    const data = {
      ...sourceNode,
      paths: {
        ...sourceNode.paths,
        [keyword]: target
      },
    };

    put(`node/${source}`, data, auth.key).then(res => {
      if (res && res.nModified >= 1) {
        dispatch({ type: UPDATE_NODE, id: source, data });
      }
    });
  };
}

export function removePath(source, keyword) {
  return (dispatch, getState) => {
    const { auth } = getState();
    const sourceNode = getState().nodes.items.find(({_id}) => _id === source);

    const data = { ...sourceNode };
    delete data.paths[keyword];

    put(`node/${source}`, data, auth.key).then(res => {
      if (res && res.nModified >= 1) {
        dispatch({ type: UPDATE_NODE, id: source, data });
      }
    });
  };
}
