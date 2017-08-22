import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, classes }) => (
  <div className={`card ${classes}`}>
    { children }
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};

Card.defaultProps = {
  classes: '',
};

export default Card;
