import { useState, useEffect, useCallback } from "react";
import Balance from "../../components/Balance";
import Transactions from "../../components/Transactions";
import { ModalForm } from "../../components/ModalForm";
import { Wrapper } from "./styles";
import ErrorBoudary from "../../components/ErrorBoudary";
import { STATUSES } from "../../constants";
import { useData } from "../../Hooks";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const {
    transactions,
    status,
    pushTransaction,
    starTransaction,
    deleteTransaction,
  } = useData();

  useEffect(() => {
    setBalance(transactions.reduce((acc, item) => acc + item.value, 0));
  }, [transactions]);

  console.log("rendering transactions");
  console.log("push transactions: ", pushTransaction);
  return (
    <ErrorBoudary>
      <Wrapper>
        <Balance balance={balance} />
        <ModalForm onChange={pushTransaction} />
        <hr />
        {status === STATUSES.PANDING ? <div>Loading...</div> : null}
        {status === STATUSES.SUCCESS ? (
          <Transactions
            transactions={transactions}
            onDelete={deleteTransaction}
            onStarClick={starTransaction}
          />
        ) : null}
      </Wrapper>
    </ErrorBoudary>
  );
};

// class Home extends Component {
//   constructor() {
//     super();

//     this.state = {
//       balance: 0,
//       transactions: [],
//     };
//   }

//   componentDidMount() {
//     getItems()
//       .then((transactions) => {
//         this.setState({
//           transactions,
//           balance: transactions.reduce((acc, item) => acc + item.value, 0),
//         });
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   }

//   onChange = ({ value, date, comment }) => {
//     if (value === "" || comment.trim() === "") {
//       return;
//     } else {
//       value = Number(value);

//       const transaction = {
//         value: +value,
//         comment,
//         date,
//         id: Date.now(),
//       };

//       this.setState((state) => ({
//         balance: state.balance + value,
//         transactions: [transaction, ...state.transactions],
//       }));
//       addItem(transaction);
//     }
//   };

//   render() {
//     return (
//       <ErrorBoudary>
//         <Wrapper>
//           <Balance balance={this.state.balance} />
//           <Form onChange={this.onChange} />
//           <hr />
//           <Transactions transactions={this.state.transactions} />
//         </Wrapper>
//       </ErrorBoudary>
//     );
//   }
// }

export default Home;
