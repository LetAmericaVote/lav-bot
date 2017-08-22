import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const Column = ({ classes, children }) => (
  <article className={`column ${classes}`}>
    <div className="column__container">
      { children }
    </div>
  </article>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};

Column.defaultProps = {
  classes: '',
};

export default Column;
