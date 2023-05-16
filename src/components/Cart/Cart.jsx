import { Button } from "@mui/joy";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = ({ cart, cleanCart, deleteProductById, total, navigate }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: " 5vh 8vw",
            }}
          >
            {cart.map((e) => {
              return (
                <div
                  key={e.id}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: "5vh",
                    flexWrap: "wrap",
                    borderRadius: "5px",
                    boxShadow: "3px 2px 3px grey",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "50vw",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={e.img}
                      alt=""
                      style={{
                        width: "120px",
                        borderRadius: "5px",
                        marginRight: "30px",
                      }}
                    />
                    <h3>{e?.title} </h3>
                  </div>
                  <h3>$ {e.price}</h3>
                  <h4>Cantidad: {e.quantity} gr. </h4>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton
                      variant="contained"
                      onClick={() => deleteProductById(e.id)}
                      sx={{ marginRight: "10px" }}
                    >
                      <DeleteForeverIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: "8vh",
            }}
          >
            <Button onClick={cleanCart} color="success">
              Limpiar carrito
            </Button>
            <h2>Total a pagar $ {total} </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "5vh 10vw",
            }}
          >
            <Button color="success" onClick={() => navigate("/checkout")}>
              Finalizar compra
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
            <img
              src="https://res.cloudinary.com/dhpyauyit/image/upload/v1683408182/E-commerce%20ChocoLove/empty-box_rsgjbi.png"
              alt=""
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3
                style={{
                  textDecoration: "inherit",
                  color: "black",
                }}
              >
                Caja vacía, ir a la tienda
              </h3>
              <IconButton>
                <KeyboardDoubleArrowRightIcon />
              </IconButton>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
