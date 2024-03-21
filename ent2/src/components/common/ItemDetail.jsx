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
}) => {
  return (
    <div className="border m-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {item.name} </h5>
          <img src={item.img} alt="" />
          <p className="card-text">{item.description}</p>
          <p>Precio:{item.price}</p>

          <ItemCountContainer stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
