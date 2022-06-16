import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from "@mui/material/styles";

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
  export function createTheme(options?: ThemeOptions): Theme;
}
