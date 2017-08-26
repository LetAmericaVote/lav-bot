import { connect } from 'react-redux';
import Node from './Node';
import './node.scss';

export default connect(Node.mapStateToProps, Node.actionCreators)(Node);
