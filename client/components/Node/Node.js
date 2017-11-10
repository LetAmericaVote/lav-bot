import React from 'react';
import PropTypes from 'prop-types';
import TextForm from '../TextForm';
import Card from '../Card';
import Button from '../Button';
import {
  NODE_OBJECT_TYPE, updateNode, deleteNode
} from '../../actions';

const Node = ({ id, node, updateNode, deleteNode }) => (
  <Card
    title={node.keyword}
    id={id}
    className="node"
    deleteItem={() => deleteNode(id)}
  >
    <TextForm
      fields={[
        {
          name: 'keyword',
          type: 'text',
          value: node.keyword,
        },
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
  </Card>
);

Node.propTypes = {
  id: PropTypes.string.isRequired,
  node: PropTypes.shape({
    message: PropTypes.string,
    keyword: PropTypes.string,
  }),
  updateNode: PropTypes.func.isRequired,
  deleteNode: PropTypes.func.isRequired,
};

Node.mapStateToProps = (state, ownProps) => ({
  node: state.objects[NODE_OBJECT_TYPE].find(node => node._id === ownProps.id),
});

Node.actionCreators = {
  updateNode, deleteNode,
};

Node.defaultProps = {
  node: {
    keyword: '',
    message: '',
  },
};

export default Node;
