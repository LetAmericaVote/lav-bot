import React from 'react';
import PropTypes from 'prop-types';
import { CARD_OBJECT_TYPE, toggleCard } from '../../actions';

const Card = ({ children, title, card, id, className, toggleCard, deleteItem }) => {
  if (! card) return null;

  return (
    <div className={`card ${card.isExpanded ? '-expand' : ''} ${className}`}>
      <div className="card__title" onClick={() => toggleCard(id)}>
        <h3>{ title }</h3>
        { deleteItem ? (
          <span className="card__delete" onClick={deleteItem}>&#128465;</span>
        ) : null }
      </div>
      <div className="card__container">
        { children }
      </div>
    </div>
  );
};

Card.mapStateToProps = (state, props) => ({
  card: state.objects[CARD_OBJECT_TYPE].find(card => card._id === props.id),
});

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  card: PropTypes.shape({
    _id: PropTypes.string,
    isExpanded: PropTypes.bool,
  }),
  toggleCard: PropTypes.func.isRequired,
  deleteItem: PropTypes.func,
};

Card.actionCreators = {
  toggleCard,
};

Card.defaultProps = {
  children: null,
  card: {
    _id: '',
    isExpanded: false,
  },
  deleteItem: null,
  className: '',
};

export default Card;
