import { connect } from 'react-redux';
import App from './App';
import './app.scss';

export default connect(App.mapStateToProps)(App);
