import { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.value);
    this.props.onChange(this.state.value);
    this.setState({ value: "" });
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="number"
          name="balance"
          placeholder="value"
          onChange={this.onChange}
          value={this.state.value}
        />
        <button>Save</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
