import { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper, Input, Row, Button, Comment } from "./styles";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      date: new Date().toISOString().substring(0, 10),
      comment: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    // debugger;
    this.props.onChange(this.state);
    this.setState({
      value: "",
      comment: "",
    });
  };

  onChange = (e) => {
    const { value, name } = e.target;
    // debugger;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
          <Row>
            <Input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
            <Input
              type="number"
              name="value"
              placeholder="value"
              onChange={this.onChange}
              value={this.state.value}
            />
          </Row>
          <Row>
            <Button>Save</Button>
            <Comment
              name="comment"
              id=""
              cols="30"
              rows="10"
              value={this.state.comment}
              onChange={this.onChange}
            ></Comment>
          </Row>
        </form>
      </Wrapper>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
