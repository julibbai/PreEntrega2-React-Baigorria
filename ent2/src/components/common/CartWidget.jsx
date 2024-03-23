import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();
  return (
    <div>
      <span>{total}</span>
      <LuShoppingCart />
    </div>
  );
};

export default CartWidget;
