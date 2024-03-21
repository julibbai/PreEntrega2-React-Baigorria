import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../common/ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
    <CircularProgress />
  </div>
);

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }

      setIsLoading(false);
    });
  }, [category]);

  return (
    <>
      {isLoading ? (
        <h2>
          <LoadingSpinner />
        </h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
