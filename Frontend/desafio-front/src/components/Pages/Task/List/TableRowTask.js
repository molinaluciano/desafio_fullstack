import React, {  useState } from "react";
import {
  TableCell,
  TableRow,
  Button,
  ButtonGroup,
  withStyles,
  useTheme
} from "@material-ui/core";

import {  useDispatch } from "react-redux";
import "./index.css";
import { deleteTask, setDataModal, setViewModal } from "../../../../redux/actions/tasks.action";



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableRowTask = ({ row }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [color] = useState(theme.palette.background.paper);


 
  

  const options = ({ action, data }) => {
   
    if (action === "MODIFY") {
      dispatch(setDataModal(row));
      dispatch(setViewModal(true));
    }
    if (action === "DELETE") {
      dispatch(deleteTask(row));
    }
  };

  return (
    <TableRow
      hover
      tabIndex={-1}
      style={{
              background: color,
            }
      }
    
    >

      <StyledTableCell align="left">
     
          {row.status? "Activa":"No Activa"}
     
      </StyledTableCell>
      <StyledTableCell align="left">
        {row.description}
      </StyledTableCell>
      <StyledTableCell align="left">
        {row.creationDate}
      </StyledTableCell>
      <StyledTableCell align="right">
        <ButtonGroup size="small" fullWidth >
          <Button
            onClick={() => options({ action: "MODIFY", data: row })}
            color="primary"
            variant="contained"
          >
            
            Modificar 
          </Button>
          <Button
            onClick={() => options({ action: "DELETE", data: row })}
            color="secondary"
            variant="contained"
          >
            Eliminar
          </Button>
        </ButtonGroup>
      </StyledTableCell>
    </TableRow>
  );
}

export default TableRowTask;