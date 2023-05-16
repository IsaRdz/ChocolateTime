import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  let total = totalQuantity() / 100;

  return (
    <Link to="/cart" style={{ color: "#431200" }}>
      <StyledBadge badgeContent={total} color="success">
        <ShoppingCartIcon />
      </StyledBadge>
    </Link>
  );
};

export default CartWidget;
