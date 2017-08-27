import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class PathForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.keyword,
      to: props.to,
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="path-form">
        <input
          type="text"
          className="base-text-input"
          placeholder="keyword"
          name="keyword"
          value={this.state.keyword}
          onChange={this.onInput}
        />
        <select name="to" value={this.state.to} onChange={this.onInput}>
          {this.props.options.map(node => (
            <option key={node._id} value={node._id}>{node.message.slice(0, 20)}</option>
          ))}
        </select>
        <Button
          copy="save"
          onSubmit={() => this.props.onSubmit(this.state)}
          variant="tertiary"
        />
        {this.props.onDelete ? (
          <Button
            copy="delete"
            onSubmit={this.props.onDelete}
            variant="tertiary"
          />
        ) : null}
      </div>
    )
  }
}

PathForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    message: PropTypes.string,
  })),
  keyword: PropTypes.string,
  to: PropTypes.string,
};

PathForm.defaultProps = {
  keyword: '',
  to: '',
  onDelete: null,
};

export default PathForm;
