import { connect } from 'react-redux';
import PathList from './PathList';
import './path-list.scss';

export default connect(PathList.mapStateToProps, PathList.actionCreators)(PathList);
