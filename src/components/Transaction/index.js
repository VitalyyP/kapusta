import PropTypes from "prop-types";
import { useContext, useCallback } from "react";

import { AppContext } from "../../providers/context";
import Star from "../../assets/img/star5.svg";
import StarFilled from "../../assets/img/star3.svg";
import { Wrapper, TransactionDate, Value, Comment, Icon } from "./styles";

const Transaction = ({
  transaction: { id, value, date, comment, isStarred },
  onDelete,
  onStarClick,
}) => {
  const { state } = useContext(AppContext);
  const deleteItem = useCallback(() => onDelete(id), [id]);

  return (
    <Wrapper value={value}>
      <Icon onClick={() => onStarClick(id)}>
        <img src={isStarred ? StarFilled : Star} alt="" />
      </Icon>
      <TransactionDate>{date}</TransactionDate>
      <Value>
        {value.toFixed(2)} {state.currency}
      </Value>
      <Comment>{comment}</Comment>
      <button onClick={deleteItem}>Delete</button>
    </Wrapper>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    value: PropTypes.number,
    date: PropTypes.string,
    comment: PropTypes.string,
    isStarred: PropTypes.bool,
  }),
  onDelete: PropTypes.func,
  onStarClick: PropTypes.func,
};

Transaction.defaultProps = {
  value: 0,
  date: "",
  comment: "",
};

export default Transaction;
