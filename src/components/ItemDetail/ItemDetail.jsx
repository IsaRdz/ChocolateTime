import { AspectRatio, Box, Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
import CounterContainer from "../Counter/CounterContainer";
const ItemDetail = ({ product, onAdd, totalQuantity }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "5vh 8vw",
          justifyContent: "space-evenly",
        }}
      >
        <AspectRatio
          sx={{
            width: "400px",
            borderRadius: 10,
            alignSelf: "center",
            margin: "0 auto",
          }}
        >
          <img src={product.img} alt="" />
        </AspectRatio>
        <Box
          sx={{
            width: "550px",
            display: "flex",
            flexWrap: "wrap",
            margin: " 0 auto",
            backgroundColor: "whitesmoke",
            padding: 5,
            borderRadius: 15,
            boxShadow: "2px 2px 5px gray",
          }}
        >
          <Box sx={{ textAlign: "center", margin: "1vh auto" }}>
            <Typography level="h2">{product.title} </Typography>

            <Typography fontSize="lg" sx={{ my: 3, maxWidth: 500 }}>
              {product.description}
            </Typography>
            <Typography level="h3" sx={{ my: 2 }}>
              ${product.price}
            </Typography>
            {product.stock > 0 ? (
              <CounterContainer
                stock={product.stock}
                onAdd={onAdd}
                initial={totalQuantity}
              />
            ) : (
              <h3 style={{ color: "gray" }}>Sin stock</h3>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography>Volver</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
