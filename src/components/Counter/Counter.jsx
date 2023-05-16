import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton, Typography } from "@mui/material";
import { Grid } from "@mui/joy";

const Counter = ({ counter, add, subtract, onAdd }) => {
  return (
    <div>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "4vh",
        }}
      >
        <IconButton variant="contained" onClick={subtract}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Typography>{counter} gr.</Typography>
        <IconButton variant="contained" onClick={add}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="success"
          onClick={() => onAdd(counter)}
        >
          Agregar al carrito
        </Button>
      </Grid>
    </div>
  );
};

export default Counter;
