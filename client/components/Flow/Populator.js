import React from 'react';
import PropTypes from 'prop-types';

class Populator extends React.Component {
  componentDidMount() {
    const { getFlowNodes, flowId } = this.props;
    getFlowNodes(flowId);
  }

  render() {
    return null;
  }
}

Populator.propTypes = {
  getFlowNodes: PropTypes.func.isRequired,
  flowId: PropTypes.string.isRequired,
};

export default Populator;
