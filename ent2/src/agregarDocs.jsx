import { addDoc, colletion } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./asyncMock";

export const agregarDocs = () => {
  const rellenar = () => {
    let productsColletion = colletion(db, "products");

    products.forEach((product) => {
      addDoc(productsColletion, product);
    });
  };
  return (
    <div>
      <button onClick={rellenar}>Agregar documentos</button>
    </div>
  );
};
