import { AspectRatio, Box, Button, Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ product }) => {
  return (
    <div>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          margin: "10vh auto",
          backgroundColor: "whitesmoke",
          padding: 5,
          borderRadius: 15,
          boxShadow: "2px 2px 5px gray",
        }}
      >
        <AspectRatio
          sx={{
            width: 350,
            borderRadius: 15,
            margin: "auto auto",
          }}
        >
          <img src={product.img} alt="" />
        </AspectRatio>
        <Box sx={{ textAlign: "center", margin: "1vh auto" }}>
          <Typography level="h2">{product.title} </Typography>
          <Typography fontSize="lg" sx={{ my: 3, maxWidth: 500 }}>
            {product.description}
          </Typography>
          <Typography level="h3" sx={{ my: 5 }}>
            ${product.price} / 100 gr.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              padding: "0 3vw",
            }}
          >
            <Link to="/">
              <Typography>Volver</Typography>
            </Link>
            <Button color="success">Agregar al carrito</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
