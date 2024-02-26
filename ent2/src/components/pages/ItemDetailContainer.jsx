import { useState, useEffect } from "react";
import { ItemDetail } from "../common/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

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

  return (
    <>
      {" "}
      {isLoading ? (
        <h2>Cargando producto...</h2>
      ) : (
        <ItemDetail {...item} />
      )}{" "}
    </>
  );
};

export default ItemDetailContainer;
