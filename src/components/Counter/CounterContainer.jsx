import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 100 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const add = () => {
    counter < stock
      ? setCounter(counter + 100)
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Stock insuficiente",
        });
  };

  const subtract = () => {
    if (counter > 100) {
      setCounter(counter - 100);
    }
  };
  return (
    <div>
      <Counter counter={counter} add={add} subtract={subtract} onAdd={onAdd} />
    </div>
  );
};

export default CounterContainer;
