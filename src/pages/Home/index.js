import { Component } from "react";
import Balance from "../../components/Balance";
import Transactions from "../../components/Transactions";
import Form from "../../components/Form";
import { Wrapper, GlobalStyle } from "./styles";
import ErrorBoudary from "../../components/ErrorBoudary";
import { getItems, addItem } from "../../utils/indexdb";
class Home extends Component {
  constructor() {
    super();

    this.state = {
      balance: 0,
      transactions: [],
    };
  }

  componentDidMount() {
    getItems()
      .then((transactions) => {
        this.setState({
          transactions,
          balance: transactions.reduce((acc, item) => acc + item.value, 0),
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  onChange = ({ value, date, comment }) => {
    if (value === "" || comment.trim() === "") {
      return;
    } else {
      value = Number(value);

      const transaction = {
        value: +value,
        comment,
        date,
        id: Date.now(),
      };

      this.setState((state) => ({
        balance: state.balance + value,
        transactions: [transaction, ...state.transactions],
      }));
      addItem(transaction);
    }
  };

  render() {
    return (
      <ErrorBoudary>
        <Wrapper>
          <Balance balance={this.state.balance} />
          <Form onChange={this.onChange} />
          <hr />
          <Transactions transactions={this.state.transactions} />
        </Wrapper>
      </ErrorBoudary>
    );
  }
}

export default Home;
