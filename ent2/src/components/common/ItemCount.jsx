import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const ItemCount = ({ stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column col-3 justify-content-center align-content-center p-4">
      <div>
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>

        <strong>{count}</strong>

        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>

        <Button variant="text">Agregar al carrito</Button>
      </div>
    </div>
  );
};
