import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../common/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
