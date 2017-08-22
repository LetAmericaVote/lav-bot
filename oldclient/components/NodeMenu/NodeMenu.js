import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import NodeMenuFields from './NodeMenuFields';
import NodeMenuPaths from './NodeMenuPaths';

const NodeMenu = ({ nodeId, node, updateNode, showNodeMenu, hideNodeMenu, addPath, removePath }) => (
  <Column classes="-rounded -padding -spacing -light-bg -overflow">
    <div className="node-menu">
      <h1>Message</h1>
      <span
        className="node-menu__close"
        onClick={() => hideNodeMenu(nodeId)}
      >&#x2716;</span>
      <p className="small italic"><span className="bold">ID: </span>{ nodeId }</p>
      { node ? <NodeMenuFields node={node} submit={updateNode} /> : null }
      { node ? <NodeMenuPaths nodeId={node._id} showNodeMenu={showNodeMenu} addPath={addPath} removePath={removePath} paths={node.paths} /> : null }
    </div>
  </Column>
);

export default NodeMenu;
