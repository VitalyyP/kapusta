import Transaction from "../Transaction";
import PropTypes from "prop-types";

const Transactions = ({ transactions = [], onDelete, onStarClick }) =>
  transactions.map((transaction) => (
    <Transaction
      key={transaction.id}
      transaction={transaction}
      onDelete={onDelete}
      onStarClick={onStarClick}
    />
  ));

Transactions.propTypes = {
  transactions: PropTypes.array,
  onDelete: PropTypes.func,
  onStarClick: PropTypes.func,
};

export default Transactions;
