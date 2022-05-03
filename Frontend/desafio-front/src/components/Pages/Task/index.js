import { Button, Grid, Box, makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import TableTask from "./List";
import ViewModal from "./CreateUpdate";
import {  useDispatch } from "react-redux";
import { setDataModal, setViewModal } from "../../../redux/actions/tasks.action";

const useStyles = makeStyles((theme) => ({
  marginBox: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4)
  }
}));

export default function Index() {
  const styles = useStyles();

  const dispatch = useDispatch();

  const handleNewTask = () => {
    dispatch(setViewModal(true));
    dispatch(setDataModal(null));
  }
    return (
      <Fragment>
        <Box textAlign='center' className={styles.marginBox}>
          <Button variant='contained' onClick={handleNewTask}>
            Crear Tarea
          </Button>
        </Box>
        <Grid item >

          <TableTask />
        <ViewModal/>
        </Grid>
      </Fragment>
    );
  }