import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  makeStyles
} from "@material-ui/core";
import TableRowTask from "./TableRowTask";
import TableHeadTask from "./TableHeadTask";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../../../../redux/actions/tasks.action";




const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function TableTask() {
  const dispatch = useDispatch()

  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const tasks = useSelector((state)=> state.tasks);
  
  useEffect(()=>{
    dispatch(fetchTask())
  }, [dispatch])
  
  useEffect(()=>{
    setRows(tasks.data)
  }, [tasks])




  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* {!Boolean(rows.length) && (
          <Alert severity="info" style={{ margin: 0 }} variant="filled">
            No hay datos para mostrar. Intenta modificar los parámetros de
            búsqueda.
          </Alert>
        )} */}

        <TableContainer hidden={!Boolean(rows.length)}>
          <Table
            className={classes.table}
            size="small"
            aria-labelledby="Ordenes"
            aria-label="enhanced table"
          >
            <TableHeadTask
              classes={classes}
              rowCount={rows.length}
            />
            <TableBody>
             
                {rows?.map((row, index) => (

                  <TableRowTask key={index} row={row}/>
                ))}
               

         
                <TableRow style={{ height: 53}}>
                  <TableCell colSpan={7} />
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
