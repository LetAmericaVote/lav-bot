import React from 'react';
import PropTypes from 'prop-types';
import Populator from './Populator';
import TextForm from '../TextForm';
import Card from '../Card';
import Node from '../Node';
import {
  updateFlow, deleteFlow,
  addNode, getFlowNodes,
  FLOW_OBJECT_TYPE, NODE_OBJECT_TYPE,
} from '../../actions';

const Flow = ({ id, flow, nodes, updateFlow, deleteFlow, addNode, getFlowNodes }) => (
  <Card
    title={flow.keyword}
    id={id}
    deleteItem={() => deleteFlow(id)}
    className="flow"
  >
    <Populator getFlowNodes={getFlowNodes} flowId={id} />
    <TextForm
      fields={[
        {
          name: 'keyword',
          type: 'text',
          value: flow.keyword,
        }
      ]}
      submit={state => updateFlow(id, state)}
      variant="inline"
    />
    <h2 className="flow__subtitle">Nodes</h2>
    <Card title="Add node" id={`add-node-${id}`}>
      <TextForm
        fields={[
          {
            name: 'message',
            type: 'textarea',
          }
        ]}
        submit={node => {
          node.flowId = id;
          addNode(node)
        }}
      />
    </Card>
    {nodes.map(({ _id }) => <Node key={_id} id={_id} flowId={id} />)}
  </Card>
);

Flow.propTypes = {
  id: PropTypes.string.isRequired,
  flow: PropTypes.shape({
    keyword: PropTypes.string,
    nodes: PropTypes.arrayOf({
      _id: PropTypes.string,
    }),
  }),
  nodes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
  })),
  updateFlow: PropTypes.func.isRequired,
  deleteFlow: PropTypes.func.isRequired,
  addNode: PropTypes.func.isRequired,
  getFlowNodes: PropTypes.func.isRequired,
};

Flow.mapStateToProps = (state, ownProps) => ({
  flow: state.objects[FLOW_OBJECT_TYPE].find(flow => flow._id === ownProps.id),
  nodes: state.objects[NODE_OBJECT_TYPE].filter(node => node.flowId === ownProps.id),
});

Flow.actionCreators = {
  updateFlow, deleteFlow, addNode, getFlowNodes
};

Flow.defaultProps = {
  flow: {
    keyword: 'Undefined keyword',
    nodes: [],
  },
  nodes: [],
};

export default Flow;
