import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let finded = products.find((prod) => prod.id === Number(id));
    setProduct(finded);
  }, [id]);
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
