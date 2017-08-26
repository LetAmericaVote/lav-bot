// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Path from '../Path';
// import Card from '../Card';
// // import PathForm from '../PathForm';
// import { updateNode, getNodePaths, addPaths, updatePath } from '../../actions';
//
// class PathPopulator extends React.Component {
//   componentDidMount() {
//     this.props.getNodePaths(this.props.nodeId);
//   }
//
//   render() {
//     return null;
//   }
// }
//
// const NodePaths = ({ nodeId, paths, getNodePaths, addPaths, updatePath }) => (
//   <div className="node-paths">
//
//   </div>
// );
//
// NodePaths.propTypes = {
//   nodeId: PropTypes.string.isRequired,
//   paths: PropTypes.arrayOf(PropTypes.shape({
//     _id: PropTypes.string,
//   })),
//   updateNode: PropTypes.func.isRequired,
//   getNodePaths: PropTypes.func.isRequired,
//   addNodePaths: PropTypes.func.isRequired,
//   updateNodePaths: PropTypes.func.isRequired,
// };
//
// NodePaths.mapStateToProps = (state, ownProps) => ({
//   paths: state.path.items.filter(path => path.from === ownProps.nodeId),
// });
//
// NodePaths.actionCreators = {
//   updateNode, getNodePaths, addPaths, updatePath,
// };
//
// NodePaths.defaultProps = {
//   paths: [],
// };
//
// export default connect(NodePaths.mapStateToProps, NodePaths.actionCreators)(NodePaths);
//
// /*
// <PathPopulator getNodePaths={getNodePaths} nodeId={nodeId} />
// <h3 className="card__subtitle">Paths</h3>
// <Card
//   id={`paths-${nodeId}`}
//   title="Add path"
// >
// <PathForm
//   fromId={nodeId}
//   onSubmit={state => addPaths([state])}
// />
// {paths.map(path => (
//   <PathForm
//     fromId={nodeId}
//     pathId={path._id}
//     onSubmit={state => updatePath(path._id, state)}
//   />
// ))}
//  */
