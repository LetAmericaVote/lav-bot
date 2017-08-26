import { connect } from 'react-redux';
import Flow from './Flow';
import './flow.scss';

export default connect(Flow.mapStateToProps, Flow.actionCreators)(Flow);
