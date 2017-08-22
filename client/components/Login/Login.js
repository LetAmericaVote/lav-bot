import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../../actions';
import TextForm from '../TextForm';

const Login = ({ login, error, pending }) => (
  <article className="login">
    <h1>Sign in to Lav Bot</h1>
    <TextForm
      error={error}
      submitCopy={'Log in'}
      submit={state => login(state.username, state.password)}
      fields={[
        { name: 'username', type: 'text' },
        { name: 'password', type: 'password' },
      ]}
    />
  </article>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Login.defaultProps = {
  error: null,
};

Login.mapStateToProps = state => ({
  pending: state.login.pending,
  error: state.login.error,
});

Login.actionCreators = {
  login,
};

export default Login;
