import React from 'react';
import PropTypes from 'prop-types';

class FlowListPopulator extends React.Component {
  componentDidMount() {
    this.props.retrieveFlows();
  }

  render() {
    return null;
  }
}

FlowListPopulator.propTypes = {
  retrieveFlows: PropTypes.func.isRequired,
};

export default FlowListPopulator;
