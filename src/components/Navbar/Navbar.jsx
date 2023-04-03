import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import style from "./Navbar.module.css";

let { containerNavbar, logo, menu, cartWidgetContainer } = style;

const Navbar = () => {
  return (
    <>
      <div className={containerNavbar}>
        <img
          src="https://res.cloudinary.com/dhpyauyit/image/upload/v1680464315/E-commerce%20ChocoLove/logoChocolate_fla92l.png"
          alt="Logo"
          className={logo}
        />
        <ul className={menu}>
          <li>Bombones & Trufas</li>
          <li>Alfajores</li>
          <li>Tabletas</li>
        </ul>
        <div className={cartWidgetContainer}>
          <CartWidget />
        </div>
      </div>
    </>
  );
};

export default Navbar;
