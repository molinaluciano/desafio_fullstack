import { createTheme, darken, alpha } from "@material-ui/core/styles";

const primary = "#2F4357";
const secondary = "#AAAAAA";
const success = "#28AC51";
const warning = "#E8663C";
const error = "#E03D3D";
const info = "#8486BE";
const errorSoft = "#F9A19A";
const infoSoft = "#90CAF9";
const warningSoft = "#FFCC99";
const greySoft = "rgba(0, 0, 0, 0.23)";
const modifier = "rgba(132, 134, 190, 0.5)";
const modifierDisabled = "rgba(0, 0, 0, 0.13)";
const article = "#FFFFFF";
const tableBorderColor = "rgba(224, 224, 224, 1)";

export default createTheme({
  palette: {
    type: "light",

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
    error: {
      main: error,
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
    modifierDisabledSoft: {
      main: modifierDisabled,
    },
    articleSoft: {
      main: article,
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
        backgroundColor: primary,
      },
    },
    MuiAutocomplete: {
      option: {
        "&:hover": {
          backgroundColor: alpha(secondary, 0.4),
          color: "#000",
        },
        "&[aria-selected=true]": {
          background: primary,
          color: "#fff",
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
          color: "#000",
        },
        "&$selected": {
          background: primary,
          color: "#fff",
          "&:hover": {
            backgroundColor: darken(primary, 0.2),
          }
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
