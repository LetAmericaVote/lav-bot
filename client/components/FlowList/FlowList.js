import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../../actions';
import Card from '../Card';

const FlowList = ({ flows }) => (
  <article className="flow-list">
    <h1 className="flow-list__title">Flows</h1>
    {flows.map(flow => (
      <Card
        key={flow._id}
        title={flow.keyword || 'Undefined keyword'}
        id={flow._id}
      >
        <p>testing child elements</p>
      </Card>
    ))}
  </article>
);

FlowList.propTypes = {
  flows: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    keyword: PropTypes.string,
  })).isRequired,
};

FlowList.defaultProps = {
  flows: [],
};

FlowList.mapStateToProps = state => ({
  // pending: state.login.pending,
  // error: state.login.error,
});

FlowList.actionCreators = {
  // login,
};

export default FlowList;
