import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newCart = cart.map((element) => {
        if (element.id === product.id) {
          return {
            ...element,
            quantity: product.quantity,
          };
        } else {
          return element;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const cleanCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    const filteredProducts = cart.filter((element) => element.id !== id);
    setCart(filteredProducts);
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + (element.price * element.quantity) / 100;
    }, 0);
    return total;
  };

  const totalQuantity = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    cleanCart,
    deleteProductById,
    totalPrice,
    totalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
