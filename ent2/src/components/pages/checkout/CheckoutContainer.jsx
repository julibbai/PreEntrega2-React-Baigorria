import { createContext, useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalPrice } = useContext(CartContext);
  let totalPrice = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPrice,
    };

    console.log(order);
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};
