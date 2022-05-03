import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Container from '../Container';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <Container bgcolor="#000000">
      <Box component="footer" bgcolor="#000000" py={5} className={classes.root}>
        <Grid item xs={6}>
          <Typography className={classes.text}>
            2022 - Desarrollado por{' '}
            <a
              href="https://www.linkedin.com/in/luciano-molina-arias/"
              target="_blank"
              className={classes.outstanding}
              rel="noopener noreferrer"
            >
              Luciano Molina
            </a>
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
}