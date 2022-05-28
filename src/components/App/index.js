import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Statistics from "../../pages/Statistics";
import { Wrapper, GlobalStyle } from "./styles";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

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
};

export default App;
