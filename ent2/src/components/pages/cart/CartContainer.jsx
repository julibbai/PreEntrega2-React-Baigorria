import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, limpiar",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>nombre: {product.name}</h2>
          <h2>cantidad: {product.quantity}</h2>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total a pagar: {total}</h2>
      <button variant="outlined" onClick={limpiarConAlerta}>
        Limpiar carrito
      </button>

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
