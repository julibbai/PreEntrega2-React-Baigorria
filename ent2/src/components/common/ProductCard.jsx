import React from "react";

export const ProductCard = ({ titulo, desc, precio }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h4>Hola {titulo}</h4>
      <h3>{desc}</h3>
      <h3>{precio}</h3>
    </div>
  );
};
