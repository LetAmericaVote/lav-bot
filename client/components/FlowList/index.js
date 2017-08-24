import { connect } from 'react-redux';
import FlowList from './FlowList';
import './flow-list.scss';

export default connect(FlowList.mapStateToProps, FlowList.actionCreators)(FlowList);
