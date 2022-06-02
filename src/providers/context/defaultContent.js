import { THEMES } from "../themes/themeList";
import { getFromStorage } from "../../utils/sessionStorage";

const defaultContent = {
  currency: "UAH",
  themeName: getFromStorage("themeName") || THEMES.BASIC,
  locale: "uk-ua",
};

export default defaultContent;
