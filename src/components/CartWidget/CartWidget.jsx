import { BsFillCartFill } from "react-icons/bs";
import style from "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidgetContainer">
      <BsFillCartFill size={24} />
      <span>7</span>
    </div>
  );
};

export default CartWidget;
