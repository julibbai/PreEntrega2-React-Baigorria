import { useState, useEffect, useContext } from "react";
import { ItemDetail } from "../common/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

import CircularProgress from "@mui/material/CircularProgress";
import { CartContext } from "../../context/CartContext";

const LoadingSpinner = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
    <CircularProgress />
  </div>
);

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(+id);
  console.log(initial);
  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(item);
    console.log(cantidad);

    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <>
      {" "}
      {isLoading ? (
        <h2>
          <CircularProgress />
        </h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}{" "}
    </>
  );
};

export default ItemDetailContainer;
