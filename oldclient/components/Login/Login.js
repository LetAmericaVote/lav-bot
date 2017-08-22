import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Logo from '../Logo';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;
    this.props.submit(username, password);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <p className="error">{ this.props.error }</p>
        <div className="input-group">
          <label>Username</label>
          <input onChange={this.onInput} value={this.state.username} name="username" type="text" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input onChange={this.onInput} value={this.state.password} name="password" type="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

const Login = (props) => (
  <Card classes="-rounded -padded -outline -white-bg -center">
    <div className="login">
      <Logo classes="-quarter -center"/>
      <h1 className="center">Login to LAV Bot</h1>
      <LoginForm submit={props.auth} error={props.error} />
    </div>
  </Card>
);

export default Login;
