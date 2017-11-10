import { connect } from 'react-redux';
import NodeList from './NodeList';
import './node-list.scss';

export default connect(NodeList.mapStateToProps, NodeList.actionCreators)(NodeList);
