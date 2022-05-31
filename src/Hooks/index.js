import { useState, useEffect, useCallback } from "react";
import { STATUSES } from "../constants";
import { getItems, addItem, deleteItem } from "../utils/indexdb";

export const useBooleanToggle = () => {
  const [status, setStatus] = useState(false);

  const handleStatusChange = () => setStatus((currentStatus) => !currentStatus);

  return [status, handleStatusChange];
};

export const useData = () => {
  const [state, setState] = useState({
    transactions: [],
    error: "",
    status: STATUSES.IDLE,
  });

  useEffect(() => {
    setState({
      ...state,
      status: STATUSES.PANDING,
    });
    getItems()
      .then((transactions) => {
        setState({
          ...state,
          transactions,
          status: STATUSES.SUCCESS,
        });
      })
      .catch((e) => {
        setState({
          ...state,
          transactions: [],
          status: STATUSES.ERROR,
          error: e,
        });
      });
  }, []);

  const pushTransaction = useCallback(
    ({ value, date, comment }) => {
      if (value === "" || comment.trim() === "") {
        return;
      } else {
        value = Number(value);

        const transaction = {
          value,
          comment,
          date,
          id: Date.now(),
          isStarred: false,
        };

        setState((state) => ({
          ...state,
          transactions: [transaction, ...state.transactions],
        }));

        addItem(transaction);
      }
    },
    [setState]
  );

  const deleteTransaction = useCallback(
    (id) => {
      setState((state) => ({
        ...state,
        transactions: state.transactions.filter((item) => item.id !== id),
      }));
      deleteItem(id);
    },
    [setState]
  );

  const starTransaction = useCallback(
    (id) => {
      setState((state) => ({
        ...state,
        transactions: state.transactions.map((item) =>
          item.id !== id ? item : { ...item, isStarred: !item.isStarred }
        ),
      }));
    },
    [setState]
  );

  console.log("state.transactions: ", state.transactions);
  return { ...state, pushTransaction, deleteTransaction, starTransaction };
};
