import React, { useEffect, useState } from "react";
import { products } from "../../products";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const ItemListContainer = () => {
  const [greeting] = useState("Bienvenido a Chocolate");
  const [data, setData] = useState();

  const { categoryName } = useParams();

  useEffect(() => {
    const filterProducts = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? filterProducts : products);
    });

    tarea.then((res) => setData(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <Carousel greeting={greeting} />
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
