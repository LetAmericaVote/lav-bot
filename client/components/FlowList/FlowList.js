import React from 'react';
import PropTypes from 'prop-types';
import Populator from './Populator';
import TextForm from '../TextForm';
import Card from '../Card';
import Flow from '../Flow';
import { FLOW_OBJECT_TYPE, retrieveFlows, addFlow } from '../../actions';

const FlowList = ({ flows, addFlow, deleteFlow, retrieveFlows }) => (
  <article className="flow-list">
    <Populator retrieveFlows={retrieveFlows} />
    <h1 className="flow-list__title">Flows</h1>
    <Card id="add-flow" title="Add flow">
      <TextForm
        fields={[
          {
            name: 'keyword',
            type: 'text'
          }
        ]}
        submit={addFlow}
        variant="inline"
      />
    </Card>
    {flows.map(({ _id }) => (
      <Flow key={_id} id={_id} />
    ))}
  </article>
);

FlowList.propTypes = {
  flows: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    keyword: PropTypes.string,
  })).isRequired,
  addFlow: PropTypes.func.isRequired,
  retrieveFlows: PropTypes.func.isRequired,
};

FlowList.mapStateToProps = state => ({
  flows: state.objects[FLOW_OBJECT_TYPE],
});

FlowList.actionCreators = {
  retrieveFlows, addFlow,
};

export default FlowList;
