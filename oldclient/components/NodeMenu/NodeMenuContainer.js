import { connect } from 'react-redux';
import { updateNode, showNodeMenu, hideNodeMenu, addPath, removePath } from '../../actions';

const getState = ({ nodes }, { nodeId }) => ({
  nodeId,
  node: nodes.items.filter(node => node && node._id === nodeId)[0],
});

const actions = {
  updateNode, hideNodeMenu, addPath, showNodeMenu, removePath
};

export default (Component) => connect(getState, actions)(Component);
