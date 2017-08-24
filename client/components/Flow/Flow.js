import React from 'react';
import PropTypes from 'prop-types';
import TextForm from '../TextForm';
import Card from '../Card';
import { updateFlow, deleteFlow } from '../../actions';

const Flow = ({ id, flow, updateFlow, deleteFlow }) => (
  <Card
    title={flow.keyword}
    id={id}
    deleteItem={() => deleteFlow(id)}
  >
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
    <Card title="messages" id={`test-${id}`} parent={id} />
  </Card>
);

Flow.propTypes = {
  id: PropTypes.string.isRequired,
  flow: PropTypes.shape({
    keyword: PropTypes.string,
  }),
  updateFlow: PropTypes.func.isRequired,
  deleteFlow: PropTypes.func.isRequired,
};

Flow.mapStateToProps = (state, ownProps) => ({
  flow: state.flow.items.find(flow => flow._id === ownProps.id),
});

Flow.actionCreators = {
  updateFlow, deleteFlow,
};

Flow.defaultProps = {
  flow: {
    keyword: 'Undefined keyword',
  },
};

export default Flow;
