import { Link } from "react-router-dom";
import { ThemeSwitch } from "../ThemeSwitch";
import { Nav } from "./styles";

const Header = () => {
  return (
    <>
      <Nav>
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
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </Nav>
      <ThemeSwitch />
    </>
  );
};

export default Header;
