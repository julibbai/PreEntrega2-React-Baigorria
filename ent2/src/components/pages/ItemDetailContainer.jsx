import { useState, useEffect } from "react";
import { ItemDetail } from "../common/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
    <CircularProgress />
  </div>
);

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);

  const onAdd = (cantidad) => {
    console.log(item);
    console.log(cantidad);
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    console.log(infoProducto);
  };

  return (
    <>
      {" "}
      {isLoading ? (
        <h2>
          <CircularProgress />
        </h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} />
      )}{" "}
    </>
  );
};

export default ItemDetailContainer;
