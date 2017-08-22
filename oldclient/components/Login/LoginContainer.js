import { connect } from 'react-redux';
import { auth } from '../../actions';

const getState = ({ auth }) => ({
  error: auth.error,
});

const actions = {
  auth,
};

export default (Component) => connect(getState, actions)(Component);
