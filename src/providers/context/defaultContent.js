import { THEMES } from "../themes/themeList";
import { getFromStorage } from "../../utils/sessionStorage";
import { LOCALES } from "../i18n";

const defaultContent = {
  currency: "UAH",
  themeName: getFromStorage("themeName") || THEMES.BASIC,
  // locale: LOCALES.UKRAINIAN,
  locale: getFromStorage("locale") || LOCALES.ENGLISH,
};

export default defaultContent;
