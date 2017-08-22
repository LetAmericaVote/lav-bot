import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login';
import FlowMenu from '../FlowMenu';
import NodeMenu from '../NodeMenu';

const App = ({ hasKey, menus }) => {
  const isAuthenticated = (
    <div className="app__wrapper">
      <FlowMenu />
      {menus.map(nodeId => <NodeMenu key={nodeId} nodeId={nodeId} />)}
    </div>
  );

  const isNotAuthenticated = (
    <div className="app__modal">
      <Login />
    </div>
  );

  return (
    <main className="app">
      { hasKey ? isAuthenticated : isNotAuthenticated }
    </main>
  );
};

App.propTypes = {
  hasKey: PropTypes.bool.isRequired,
};

export default App;
