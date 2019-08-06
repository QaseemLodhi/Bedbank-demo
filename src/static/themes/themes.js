import { createTheming } from "@callstack/react-theme-provider";

const themes = {
  default: {
    primaryColor: "red",
    secondaryColor: "green"
  }
};
const { ThemeProvider, withTheme } = createTheming(themes.default);
export { ThemeProvider, withTheme };
