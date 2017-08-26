import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onSubmit, copy, type, variant }) => (
  <button
    className={`button ${variant}`}
    type={type}
    onClick={onSubmit}
  >{ copy }</button>
);

Button.propTypes = {
  onSubmit: PropTypes.func,
  copy: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'tertiary']),
};

Button.defaultProps = {
  onSubmit: () => {},
  copy: 'submit',
  type: 'submit',
  variant: 'default',
};

export default Button;
