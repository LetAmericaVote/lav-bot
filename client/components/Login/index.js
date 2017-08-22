import { connect } from 'react-redux';
import Login from './Login';
import './login.scss';

export default connect(Login.mapStateToProps, Login.actionCreators)(Login);
