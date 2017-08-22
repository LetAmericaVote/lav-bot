import React from 'react';
import PropTypes from 'prop-types';
import FullColumn from '../Column/FullColumn';
import Logo from '../Logo';
import Card from '../Card';
import FlowMenuSearch from './FlowMenuSearch';

const renderList = (nodes, titleKey, showNodeMenu) => (
  nodes.map((node) => (
    <a key={node._id} onClick={() => showNodeMenu(node._id)}>
      <Card classes="-rounded -padded -outline -white-bg -margin">
        <p className="small italic"><span className="bold">ID: </span>{ node._id }</p>
        <p>{ node[titleKey] }</p>
      </Card>
    </a>
  ))
);

const FlowMenu = ({ triggers, nodes, showNodeMenu, createNode }) => (
  <FullColumn
    classes='-shadow'
    header={<Logo classes="-quarter -center" />}
  >
    <div className="flow-menu">
      <div className="flow-menu__section">
        <h2>Flows</h2>
        { triggers ? renderList(triggers, 'trigger', showNodeMenu) : null }
      </div>
      <div className="flow-menu__section">
        <h2>All Messages</h2>
        <button onClick={createNode}>add message</button>
        <FlowMenuSearch />
        { nodes ? renderList(nodes, 'message', showNodeMenu) : null }
      </div>
    </div>
  </FullColumn>
);

FlowMenu.propTypes = {
  triggers: PropTypes.array.isRequired,
};

export default FlowMenu;
