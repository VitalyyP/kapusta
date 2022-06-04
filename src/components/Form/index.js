import { useState } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { Wrapper, Input, Row, Button, Comment } from "./styles";

const Form = (props) => {
  const [form, setForm] = useState({
    value: "",
    date: new Date().toISOString().substring(0, 10),
    comment: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // debugger;
    props.onChange(form);
    setForm({
      ...form,
      value: "",
      comment: "",
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    // debugger;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <FormattedMessage id="hello" />
      <form onSubmit={onSubmit}>
        <Row>
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />
          <Input
            type="number"
            name="value"
            placeholder="value"
            onChange={onChange}
            value={form.value}
          />
        </Row>
        <Row>
          <Button>Save</Button>
          <Comment
            name="comment"
            id=""
            cols="30"
            rows="10"
            value={form.comment}
            onChange={onChange}
          ></Comment>
        </Row>
      </form>
    </Wrapper>
  );
};

// class Form extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: "",
//       date: new Date().toISOString().substring(0, 10),
//       comment: "",
//     };
//   }
//   onSubmit = (e) => {
//     e.preventDefault();
//     // debugger;
//     this.props.onChange(this.state);
//     this.setState({
//       value: "",
//       comment: "",
//     });
//   };

//   onChange = (e) => {
//     const { value, name } = e.target;
//     // debugger;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     return (
//       <Wrapper>
//         <form onSubmit={this.onSubmit}>
//           <Row>
//             <Input
//               type="date"
//               name="date"
//               value={this.state.date}
//               onChange={this.onChange}
//             />
//             <Input
//               type="number"
//               name="value"
//               placeholder="value"
//               onChange={this.onChange}
//               value={this.state.value}
//             />
//           </Row>
//           <Row>
//             <Button>Save</Button>
//             <Comment
//               name="comment"
//               id=""
//               cols="30"
//               rows="10"
//               value={this.state.comment}
//               onChange={this.onChange}
//             ></Comment>
//           </Row>
//         </form>
//       </Wrapper>
//     );
//   }
// }

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
