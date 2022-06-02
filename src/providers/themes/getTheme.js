import { DARK, BASIC, LIGHT } from "./themes";
import { THEMES } from "./themeList";

export const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.DARK:
      // console.log(DARK);
      return DARK;
    case THEMES.LIGHT:
      // console.log(LIGHT);
      return LIGHT;
    default:
      // console.log(BASIC);
      return BASIC;
  }
};
