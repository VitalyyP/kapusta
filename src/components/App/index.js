import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { AppContext } from "../../providers/context";
import { getTheme } from "../../providers/themes/getTheme";
import { IntlAppProvider } from "../../providers/i18n";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { state, dispatch } = useContext(AppContext);

  console.log("befor ThemeProvider, ", getTheme(state.themeName));
  return (
    <ThemeProvider theme={() => getTheme(state.themeName)}>
      <IntlAppProvider>
        <App />
      </IntlAppProvider>
    </ThemeProvider>
  );
};
