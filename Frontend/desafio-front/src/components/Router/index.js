import React, { Fragment } from "react";
import {  Route,  Routes } from "react-router-dom";
import {
  Paper,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import Header from "../Landing/Header/Header";
import Task from "../Pages/Task";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Fragment>
     
        <Paper className={classes.root} >
          <Card >
            <Header />
            <CardContent>
              <Routes>
                <Route exact path="/" element={<Task/>}  />
               </Routes>
            </CardContent>
          </Card>
        </Paper>
    
    </Fragment>
  );
}
