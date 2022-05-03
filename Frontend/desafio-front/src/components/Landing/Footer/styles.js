import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: '1.25rem',
    lineHeight: '2.225rem',
    fontFamily: 'Poppins',
    fontWeight: 600,
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.0125rem',
      lineHeight: '2.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8125rem',
      lineHeight: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7125rem',
      lineHeight: '1rem',
    },
  },
  linkGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  link: {
    fontSize: '1.25rem',
    lineHeight: '2.225rem',
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.0125rem',
      lineHeight: '2.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8125rem',
      lineHeight: '3.125rem',
    },
    '@media (max-width: 280px)': {
      fontSize: '0.7125rem',
    },
  },
  outstanding: {
    color: '#F59F69',
    textDecoration: 'none',
  }
}));

export default useStyles;
