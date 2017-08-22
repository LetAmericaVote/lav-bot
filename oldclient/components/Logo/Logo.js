import React from 'react';
import PropTypes from 'prop-types';
import img from './icon.png';

const Logo = ({ classes }) => (
  <div className={`logo ${classes}`}>
    <img src={img} />
  </div>
);

Logo.propTypes = {
  classes: PropTypes.string,
};

Logo.defaultProps = {
  classes: '',
};

export default Logo;
