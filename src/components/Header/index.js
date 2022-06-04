import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { ThemeSwitch } from "../ThemeSwitch";
import { Nav } from "./styles";

const Header = () => {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <FormattedMessage id="menu.home" />
            </Link>
          </li>
          <li>
            <Link to="/statistics">
              <FormattedMessage id="menu.statistics" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FormattedMessage id="menu.about" />
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FormattedMessage id="menu.settings" />
            </Link>
          </li>
        </ul>
      </Nav>
      <ThemeSwitch />
    </>
  );
};

export default Header;
