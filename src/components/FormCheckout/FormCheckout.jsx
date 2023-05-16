import { Button } from "@mui/joy";
import { Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              fullWidth
              name="apellido"
              onChange={handleChange}
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Teléfono"
              variant="outlined"
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Confirmar email"
              variant="outlined"
              fullWidth
              name="confirmEmail"
              onChange={handleChange}
              error={errors.confirmEmail ? true : false}
              helperText={errors.confirmEmail}
            />
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" color="success">
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
