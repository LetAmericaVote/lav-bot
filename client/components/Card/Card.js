import React from 'react';
import PropTypes from 'prop-types';
import { toggleCard } from '../../actions';

const Card = ({ children, title, card, id, toggleCard }) => {
  return (
    <div className={`card ${card.expand ? '-expand' : ''}`}>
      <div className="card__title" onClick={() => toggleCard(id)}>
        <h3>{ title }</h3>
        <span className="card__delete">&#128465;</span>
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
  card: PropTypes.shape({
    expand: PropTypes.bool,
  }),
  toggleCard: PropTypes.func.isRequired,
};

Card.actionCreators = {
  toggleCard,
};

Card.defaultProps = {
  children: null,
  card: {
    expand: false,
  },
};

export default Card;
