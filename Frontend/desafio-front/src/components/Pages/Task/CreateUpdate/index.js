import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button, Switch, TextareaAutosize, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { createTask, setDataModal, setViewModal, updateTask } from "../../../../redux/actions/tasks.action";
const useStyles = makeStyles((theme) => ({
  marginSwitch: {
    marginBottom: theme.spacing(2)
  }
}));
const initialValues = {
  id:"",
  description: "",
  status: false,
}
export default function Index() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const tasks = useSelector((state)=> state.tasks);

  const [data, setData] = useState(initialValues);
  const requiredFields = [
    'description',
    'status'
  ]
  useEffect(() => {
    if (tasks.dataModal) {
      setData(tasks.dataModal);
    }
  }, [tasks.dataModal]);

  const handleClose = () => {
    setData(initialValues);
    dispatch(setViewModal(false));
    dispatch(setDataModal(null));
  };

  const handleSave = () => {
    if (requiredFields.some((field) => data[field] === '')) {
      return 
    }
    if(data?.id){

        dispatch(updateTask(data));
    }else{
        dispatch(createTask(data));
        
      }
    setData(initialValues);
    dispatch(setViewModal(false));
    dispatch(setDataModal(null));
  };

  return (
    <Dialog
      onClose={ handleClose }
      open={tasks.viewModal}
    >
       <DialogTitle>{data?.id?"Tarea Nro " + data?.id: "Crear tarea"}</DialogTitle> 
      <DialogContent>
     
        <DialogContentText>
                
        </DialogContentText>
          <TextareaAutosize
        
            autoFocus
            margin="dense"
            id="description"
            label="Descripcion"
            type="text"
            variant="standard"
            value={data?.description}
            style={{ width: 200 }}
            onChange={(e) => {
                setData({
                  ...data,
                  description: e.target.value,
                });
              }}
          />
        <Switch
        className={styles.marginSwitch}
                checked={data?.status}
                onChange={(e) => {
                setData({
                    ...data,
                    status: e.target.checked,
                });  
                }}
                color="primary"
                name="status"
            />
        <br />
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogActions>
    </Dialog>
  );
}
