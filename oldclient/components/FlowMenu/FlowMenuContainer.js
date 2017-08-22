import { connect } from 'react-redux';
import { showNodeMenu, createNode } from '../../actions';

const getState = ({ nodes }) => ({
  triggers: nodes.items.filter(node => node && node.trigger && node.trigger.length) || [],
  nodes: nodes.query.length ? nodes.items.filter(
    node => node && typeof node.message === 'string' &&
      node.message.toLowerCase().indexOf(nodes.query.toLowerCase()) !== -1
  ) : nodes.items,
});

const actions = {
  showNodeMenu, createNode,
};

export default (Component) => connect(getState, actions)(Component);
