import { ItemCount } from "./ItemCount";
import React from "react";
import ItemCountContainer from "./ItemCountContainer";

export const ItemDetail = ({
  name,
  description,
  img,
  price,
  stock,
  item,
  onAdd,
  initial,
}) => {
  return (
    <div className="border m-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {item.name} </h5>
          <img src={item.img} alt="" />
          <p className="card-text">{item.description}</p>
          <p>Precio:{item.price}</p>

          {initial ? (
            <h3>Ya tienes {initial} en el carrito</h3>
          ) : (
            <h2>No tienes unidades</h2>
          )}

          <ItemCountContainer
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      </div>
    </div>
  );
};
