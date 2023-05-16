import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import FormCheckout from "./FormCheckout";

import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = totalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
    cleanCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      confirmEmail: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string().max(30).required("Este campo es obligatorio"),
      apellido: Yup.string().max(30).required("Este campo es obligatorio"),
      telefono: Yup.number()
        .integer("Debe ingresar un número válido")
        .required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Debe ingresar un email válido")
        .required("Este campo es obligatorio"),
      confirmEmail: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("email")], "Los emails no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <div
          style={{
            width: "80%",
            height: "70%",
            margin: "5vh auto",
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "200px",
              borderRadius: "50px",
              marginBottom: "2vh",
            }}
            src="https://res.cloudinary.com/dhpyauyit/image/upload/v1684075438/E-commerce%20ChocoLove/43260f7fa420bf965641fefee634ba7f_lnczpm.gif"
            alt=""
          />
          <h1>¡Gracias por su compra!</h1>
          <h2>Ya estamos preparando tu pedido</h2>
          <h3 style={{ margin: "4vh auto" }}>
            {" "}
            Su código de orden es: {orderId}{" "}
          </h3>
        </div>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
