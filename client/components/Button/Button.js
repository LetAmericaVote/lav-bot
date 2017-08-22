import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onSubmit, copy, type }) => (
  <button
    className="button"
    type={type}
    onSubmit={onSubmit}
  >{ copy }</button>
);

Button.propTypes = {
  onSubmit: PropTypes.func,
  copy: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  onSubmit: () => {},
  copy: 'submit',
  type: 'submit',
};

export default Button;
