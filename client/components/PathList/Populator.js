import React from 'react';
import PropTypes from 'prop-types';

class Populator extends React.Component {
  componentDidMount() {
    const { nodeId, getNodePaths } = this.props;
    getNodePaths(nodeId);
  }

  render() {
    return null;
  }
}

Populator.propTypes = {
  nodeId: PropTypes.string.isRequired,
  getNodePaths: PropTypes.func.isRequired,
};

export default Populator;
