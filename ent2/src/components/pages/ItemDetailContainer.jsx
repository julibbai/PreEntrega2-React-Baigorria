import { useState, useEffect } from "react";
import { ItemDetail } from "../common/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log(id);
  }, []);

  return <>{/* {item && <ItemDetail {...item} />} */}</>;
};

export default ItemDetailContainer;
