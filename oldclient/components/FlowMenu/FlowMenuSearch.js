import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchNodeMenu } from '../../actions';

const FlowMenuSearch = ({ query, searchNodeMenu }) => (
  <div className="flow-menu__search input-group">
    <label>Search messages</label>
    <input type="text" value={query} onChange={event => searchNodeMenu(event.target.value)} />
  </div>
);

const getState = ({ nodes }) => ({
  query: nodes.query,
});

const actions = {
  searchNodeMenu,
};

export default connect(getState, actions)(FlowMenuSearch);
