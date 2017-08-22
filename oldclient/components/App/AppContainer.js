import { connect } from 'react-redux';

const getState = ({ auth, nodes }) => ({
  hasKey: auth.key !== null,
  menus: nodes.menus,
});

export default (Component) => connect(getState)(Component);
