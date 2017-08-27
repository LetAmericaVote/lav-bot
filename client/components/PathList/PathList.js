import React from 'react';
import PropTypes from 'prop-types';
import Populator from './Populator';
import PathForm from '../PathForm';
import {
  getNodePaths, addPath, updatePath, deletePath,
  PATH_OBJECT_TYPE, NODE_OBJECT_TYPE
} from '../../actions';

const PathList = ({ nodeId, paths, allNodes, addPath, updatePath, deletePath, getNodePaths }) => (
  <div className="path-list">
    <Populator nodeId={nodeId} getNodePaths={getNodePaths}/>
    <h2 className="path-list__title">Paths</h2>
    <PathForm
      onSubmit={state => addPath({ ...state, from: nodeId })}
      options={allNodes}
    />
    {paths.map(path => (
      <PathForm
        key={path._id}
        onSubmit={state => updatePath({ ...state, _id: path._id, from: nodeId })}
        onDelete={() => deletePath(path._id)}
        options={allNodes}
        keyword={path.keyword}
        to={path.to}
      />
    ))}
  </div>
);

PathList.propTypes = {
  nodeId: PropTypes.string.isRequired,
  addPath: PropTypes.func.isRequired,
  updatePath: PropTypes.func.isRequired,
  deletePath: PropTypes.func.isRequired,
  getNodePaths: PropTypes.func.isRequired,
  paths: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
  })),
  allNodes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    message: PropTypes.string,
  })),
};

PathList.mapStateToProps = (state, ownProps) => {
  const node = state.objects[NODE_OBJECT_TYPE].find(n => n._id === ownProps.nodeId);
  const allNodes = node.flowId ? (
    state.objects[NODE_OBJECT_TYPE].filter(
      n => n.flowId === node.flowId && n._id !== ownProps.nodeId
    )
  ) : [];

  return {
    paths: state.objects[PATH_OBJECT_TYPE].filter(path => path.from === ownProps.nodeId),
    allNodes,
  }
};

PathList.actionCreators = {
  getNodePaths, addPath, updatePath, deletePath,
};

PathList.defaultProps = {
  paths: [],
  allNodes: [],
};

export default PathList;
