import { Component } from "react";
import Balance from "../../components/Balance";
import Transactions from "../../components/Transactions";
import Form from "../../components/Form";
import { Wrapper, GlobalStyle } from "./styles";
import ErrorBoudary from "../../components/ErrorBoudary";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      balance: 0,
      transactions: [],
    };
  }

  onChange = (value) => {
    if (value === "") {
      return;
    } else {
      value = Number(value);
      this.setState((state) => ({
        balance: state.balance + value,
        transactions: [
          {
            value,
            label: "changed",
            id: state.transactions.length + 1,
          },
          ...state.transactions,
        ],
      }));
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
