import React from 'react';
import PropTypes from 'prop-types';
import { toggleCard } from '../../actions';

const Card = ({ children, title, card, id, parent, toggleCard, deleteItem }) => {
  if (! card) return null;

  return (
    <div className={`card ${card.expand ? '-expand' : ''}`}>
      <div className="card__title" onClick={() => toggleCard(id, parent)}>
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
  card: state.card.items[props.id],
});

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parent: PropTypes.string,
  card: PropTypes.shape({
    expand: PropTypes.bool,
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
    expand: false,
  },
  deleteItem: null,
  parent: null,
};

export default Card;
