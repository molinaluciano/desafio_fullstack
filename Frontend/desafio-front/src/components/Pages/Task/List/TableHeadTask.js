import React from "react";
import {
    TableCell,
    TableHead,
    TableRow,
  } from "@material-ui/core";

  const headCells = [
      {
        id: "status",
        numeric: false,
        disablePadding: false,
        label: "Estado",
      },
      {
        id: "description",
        numeric: false,
        disablePadding: false,
        label: "Descripción",
      },
  
      {
        id: "creationDate",
        numeric: false,
        disablePadding: false,
        label: "Fecha Creación",
      }
  ]


export default function TableHeadTask(props) {

  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
            >
              <strong>{headCell.label}</strong>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
