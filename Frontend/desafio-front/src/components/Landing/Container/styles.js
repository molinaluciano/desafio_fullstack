import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4.625),
    paddingRight: theme.spacing(4.625),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(8.825),
      paddingRight: theme.spacing(8.825),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(13.225),
      paddingRight: theme.spacing(13.225),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(17.625),
      paddingRight: theme.spacing(17.625),
    },
  },
}));

export default useStyles;
