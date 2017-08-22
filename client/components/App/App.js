import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import Login from '../Login';

const App = ({ hasKey }) => (
  <main className="app">
    <Nav />
    <div className="app__container">
      { hasKey ? null : <Login /> }
    </div>
  </main>
);

App.propTypes = {
  hasKey: PropTypes.bool.isRequired,
};

App.mapStateToProps = state => ({
  hasKey: state.login.key !== null,
});

export default App;
