import { Button } from "@mui/joy";
import { Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div
      style={{
        paddingTop: "50px",
        width: "60vw",
        margin: "0 auto",
      }}
    >
      <form action="" onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          flex
          justifyContent={"center"}
          sx={{
            backgroundColor: "white",
            padding: "5vh 0",
            borderRadius: 5,
            boxShadow: "2px 2px 5px gray",
          }}
        >
          <h3>Ingrese sus datos para finalizar la compra</h3>
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
              sx={{ backgroundColor: "white" }}
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
              sx={{ backgroundColor: "white" }}
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
              sx={{ backgroundColor: "white" }}
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
              sx={{ backgroundColor: "white" }}
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
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2vh",
            }}
          >
            <Button type="submit" color="success" disabled={false}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
