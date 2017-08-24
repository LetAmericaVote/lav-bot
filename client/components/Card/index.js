import { connect } from 'react-redux';
import Card from './Card';
import './card.scss';

export default connect(Card.mapStateToProps, Card.actionCreators)(Card);
