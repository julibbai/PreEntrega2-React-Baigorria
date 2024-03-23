import { useState, useEffect } from "react";
import { ItemList } from "../common/ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

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
    let productsCollection = collection(db, "products");

    let consulta;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    } else {
      consulta = productsCollection;
    }
    getDocs(consulta)
      .then((res) => {
        let arrayLindo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayLindo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <h1>
        <center>
          <LoadingSpinner />
        </center>
      </h1>
    );
  }
  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
