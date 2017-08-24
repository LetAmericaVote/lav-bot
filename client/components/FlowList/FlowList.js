import React from 'react';
import PropTypes from 'prop-types';
import { retrieveFlows, addFlow } from '../../actions';
import TextForm from '../TextForm';
import Card from '../Card';

class FlowListPopulator extends React.Component {
  componentDidMount() {
    this.props.retrieveFlows();
  }

  render() {
    return null;
  }
}

const FlowList = ({ flows, addFlow, retrieveFlows }) => (
  <article className="flow-list">
    <FlowListPopulator retrieveFlows={retrieveFlows} />
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
      />
    </Card>
    {flows.map(flow => (
      <Card
        key={flow._id}
        title={flow.keyword || 'Undefined keyword'}
        id={flow._id}
      >
        <p>testing child elements</p>
      </Card>
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
  flows: state.flow.items,
});

FlowList.actionCreators = {
  retrieveFlows, addFlow,
};

export default FlowList;
