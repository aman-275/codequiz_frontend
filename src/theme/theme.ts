import { createTheme } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  status: {
    danger: orange[500],
  },
});

export default theme;
