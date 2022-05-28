import PropTypes from "prop-types";
import { Wrapper } from "./styles";

const Transaction = ({ transaction: { value, id, label } }) => (
  <Wrapper value={value}>
    {id} {label} {value}
  </Wrapper>
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

Transaction.defaultProps = {
  label: "",
  value: 0,
};

export default Transaction;
