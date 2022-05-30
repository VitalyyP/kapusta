import PropTypes from "prop-types";
import { Wrapper, TransactionDate, Value, Comment } from "./styles";

const Transaction = ({ transaction: { value, date, comment } }) => (
  <Wrapper value={value}>
    <TransactionDate>{date}</TransactionDate>
    <Value>{value.toFixed(2)}</Value>
    <Comment>{comment}</Comment>
  </Wrapper>
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    value: PropTypes.number,
    date: PropTypes.string,
    comment: PropTypes.string,
  }),
};

Transaction.defaultProps = {
  value: 0,
  date: "",
  comment: "",
};

export default Transaction;
