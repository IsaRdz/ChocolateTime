import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { MoonLoader } from "react-spinners";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const dataCollection = collection(db, "products");
    const refDoc = doc(dataCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = { ...product, quantity: cantidad };
    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let totalQuantity = getQuantityById(product.id);

  return (
    <div>
      {Object.entries(product).length === 0 && (
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
      <ItemDetail
        product={product}
        onAdd={onAdd}
        totalQuantity={totalQuantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
