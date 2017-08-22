import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <p className="error">{ error }</p>
);

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {
  error: 'The application had an error.',
};

export default Error;
