import React from 'react';
import PropTypes from 'prop-types';

class NodeMenuFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: props.node.message || '',
      trigger: props.node.trigger || '',
    };

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.submit(this.props.node._id, this.state);
  }

  render() {
    return (
      <form className="node-menu__fields" onSubmit={this.onSubmit}>
        <p className="error">{ this.props.error }</p>
        <div className="input-group">
          <label>Message</label>
          <textarea onChange={this.onInput} value={this.state.message} name="message" />
        </div>
        <div className="input-group">
          <label>Trigger</label>
          <input onChange={this.onInput} value={this.state.trigger} name="trigger" type="text" />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default NodeMenuFields;
