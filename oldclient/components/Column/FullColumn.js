import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';

const FullColumn = ({ children, header, classes }) => (
  <Column>
    <div className={`column-full ${classes}`}>
      <div className="column-full__header">
        { header }
      </div>
      <div className="column-full__main">
        { children }
      </div>
    </div>
  </Column>
);

FullColumn.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  classes: PropTypes.string,
};

FullColumn.defaultProps = {
  header: null,
  classes: '',
};

export default FullColumn;
