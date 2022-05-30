import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Statistics from "../../pages/Statistics";
import { open } from "../../utils/indexdb";
import { Wrapper, GlobalStyle } from "./styles";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    open()
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        console.log("DB error!");
      });
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    return (
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
