import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Error from '../Error';

class TextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    for (const field of props.fields) {
      this.state[field.name] = field.value || '';
    }

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
  }

  renderField({ type, name }) {
    let input = null;

    switch (type) {
      case 'text':
        input = <input type="text" />;
        break;
      case 'password':
        input = <input type="password" />;
        break;
      case 'textarea':
        input = <textarea />;
        break;
      default: break;
    }

    const props = {
      className: "base-text-input",
      onChange: this.onInput,
      value: this.state[name],
      name,
    };

    return (
      <div key={name} className="text-form__group">
        <label>{ name }</label>
        <input.type {...input.props} {...props} />
      </div>
    );
  }

  render() {
    const { fields, error, submitCopy, variant } = this.props;

    return (
      <form className={`text-form -${variant}`} onSubmit={this.onSubmit}>
        { error ? <Error error={error} /> : null }
        { fields.map(field => this.renderField(field)) }
        <Button onSubmit={this.onSubmit} copy={submitCopy} />
      </form>
    )
  }
}

TextForm.propTypes = {
  error: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'inline']),
  submitCopy: PropTypes.string,
  submit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

TextForm.defaultProps = {
  error: null,
  variant: 'normal',
  submitCopy: 'submit',
};

export default TextForm;
