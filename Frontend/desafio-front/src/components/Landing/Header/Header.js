import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  DARK: {
    height: 60,
    opacity: 0.4,
    filter: "invert(1)",
  },
  text: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }
}));

export default function HeaderPage() {
  const styles = useStyles();

  return (
    <Grid container  justifyContent="center" alignItems="center" >
      <Grid item> 
        <Grid container spacing={2}>
          
          <Grid container className={styles.text}>
            <Grid container >
              <Grid item>
                <Typography variant="h5">
                  Bienvenidos al Mantenedor
                </Typography>
              </Grid>
          
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
    </Grid>
  );
}


