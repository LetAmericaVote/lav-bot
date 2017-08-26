import React from 'react';
import PropTypes from 'prop-types';
import TextForm from '../TextForm';
import Card from '../Card';
import Button from '../Button';
import {
  FLOW_OBJECT_TYPE, NODE_OBJECT_TYPE,
  updateNode, deleteNode, updateFlow
} from '../../actions';

const Node = ({ id, node, flow, updateNode, deleteNode, updateFlow }) => (
  <Card
    title={`${node.message.slice(0, 20)}...`}
    id={id}
    className="node"
    deleteItem={() => deleteNode(id)}
  >
    <TextForm
      fields={[
        {
          name: 'message',
          type: 'textarea',
          value: node.message,
        }
      ]}
      submit={state => {
        state._id = id;
        updateNode(state)
      }}
    />
    { ! flow.start || flow.start !== id ? (
      <Button
        copy="Set this as the first message in flow"
        variant="tertiary"
        type="button"
        onSubmit={() => updateFlow({ _id: node.flowId, start: id })}
      />
    ) : null}
  </Card>
);

Node.propTypes = {
  id: PropTypes.string.isRequired,
  node: PropTypes.shape({
    flowId: PropTypes.string,
    message: PropTypes.string,
  }),
  flow: PropTypes.shape({
    _id: PropTypes.string,
    start: PropTypes.string,
  }),
  updateNode: PropTypes.func.isRequired,
  deleteNode: PropTypes.func.isRequired,
  updateFlow: PropTypes.func.isRequired,
};

Node.mapStateToProps = (state, ownProps) => ({
  node: state.objects[NODE_OBJECT_TYPE].find(node => node._id === ownProps.id),
  flow: state.objects[FLOW_OBJECT_TYPE].find(flow => flow._id === ownProps.flowId),
});

Node.actionCreators = {
  updateNode, deleteNode, updateFlow,
};

Node.defaultProps = {
  node: {
    flowId: '',
    message: '',
  },
  flow: {
    _id: '',
    start: null,
  },
};

export default Node;
