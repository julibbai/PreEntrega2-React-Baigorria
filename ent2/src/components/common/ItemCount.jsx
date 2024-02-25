import { useState } from "react";

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
    <div className="d-flex flex-column col-2 justify-content-center align-content-center p-4">
      <div>
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
      </div>
    </div>
  );
};
