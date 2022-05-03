import { createTheme, darken, alpha } from "@material-ui/core/styles";

const primary = "#6DEEF0";
const secondary = "#AEB6BF";
const success = "#2BAC51";
const warning = "#FF8000";
const info = "#8486BE";
const errorSoft = "#FF6565";
const infoSoft = "#43A2F7";
const warningSoft = "#E7BD00";
const greySoft = "rgba(255, 255, 255, 0.23)";
const modifier = "rgba(132, 134, 190, 0.5)";
const article = "#424242";
const modifierDisabled = "rgba(255, 255, 255, 0.13)";
const tableBorderColor = "rgba(81, 81, 81, 1)";

export default createTheme({
  palette: {
    type: "dark",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    success: {
      main: success,
    },
    warning: {
      main: warning,
    },
    info: {
      main: info,
    },
    errorSoft: {
      main: errorSoft,
    },
    infoSoft: {
      main: infoSoft,
    },
    warningSoft: {
      main: warningSoft,
    },
    modifierSoft: {
      main: modifier,
    },
    articleSoft: {
      main: article,
    },
    modifierDisabledSoft: {
      main: modifierDisabled,
    },
    tableBorderSoft: {
      main: tableBorderColor,
    },
    greySoft: {
      main: greySoft,
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 450,
    fontWeightBold: 500,
  },

  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: "#303030",
      },
    },
    MuiAutocomplete: {
      option: {
        "&:hover": {
          backgroundColor: alpha(secondary, 0.4),
          color: "#fff",
        },
        "&[aria-selected=true]": {
          background: primary,
          color: "#000",
          "&:hover": {
            backgroundColor: darken(primary, 0.2),
          },
        }
      }
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: alpha(secondary, 0.4),
        },
      },
      root: {
        "&:hover": {
          backgroundColor: alpha(secondary, 0.4),
          color: "#fff",
        },
        "&$selected": {
          background: primary,
          color: "#000",
          "&:hover": {
            backgroundColor: darken(primary, 0.2),
          },
        },
      },
    },
    MuiLinearProgress: {
      root: {
        height: 3,
      },
    },
    MuiPaper: {
      root: {
        marginBottom: "4%",
      },
    },
  },
});
