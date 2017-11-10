import React from 'react';
import PropTypes from 'prop-types';
import TextForm from '../TextForm';
import Card from '../Card';
import Node from '../Node';
import {
  NODE_OBJECT_TYPE, retrieveNodes, addNode,
} from '../../actions';

class NodeList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.retrieveNodes();
  }

  render() {
    return (
      <article className="node-list">
        <h1 className="node-list__title">Messages</h1>
        <Card id="add-node" title="Add message">
          <TextForm
            fields={[
              {
                name: 'keyword',
                type: 'text',
              },
              {
                name: 'message',
                type: 'textarea',
              },
            ]}
            submit={this.props.addNode}
          />
        </Card>
        {this.props.nodes.map(({ _id }) => (
          <Node key={_id} id={_id} />
        ))}
      </article>
    );
  }
}

NodeList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    keyword: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  addNode: PropTypes.func.isRequired,
  retrieveNodes: PropTypes.func.isRequired,
};

NodeList.defaultProps = {
  nodes: [],
};

NodeList.mapStateToProps = state => ({
  nodes: state.objects[NODE_OBJECT_TYPE],
});

NodeList.actionCreators = {
  retrieveNodes, addNode,
};

export default NodeList;
