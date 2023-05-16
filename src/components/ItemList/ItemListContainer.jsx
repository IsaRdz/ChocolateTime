import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { MoonLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [greeting] = useState("Bienvenido a Chocolate");
  const [data, setData] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const dataCollection = collection(db, "products");

    if (categoryName) {
      const dataCollectionFiltered = query(
        dataCollection,
        where("category", "==", categoryName)
      );
      consulta = dataCollectionFiltered;
    } else {
      consulta = dataCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setData(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div style={{ backgroundColor: "whitesmoke", height: "100vh" }}>
      <Carousel greeting={greeting} />
      {data.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20vh",
            alignItems: "center",
          }}
        >
          <MoonLoader color="#357a38" />
        </div>
      )}
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
