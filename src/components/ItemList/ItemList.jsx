import React from "react";
import style from "./ItemList.module.css";

let { greetingContainer } = style;

const ItemList = ({ greeting }) => {
  return (
    <div className={greetingContainer}>
      <h2> {greeting} </h2>
    </div>
  );
};

export default ItemList;
