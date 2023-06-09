import React from 'react';
import ItemCart from "./ItemCart";
import {contexto} from "./CartContext";
import { useContext } from "react";

const ItemCartList = () => {
  const { carrito } = useContext(contexto);

  return (
    <div className="ItemCartList">
      {carrito.map((producto) => {
        return <ItemCart key={producto.id} {...producto} />;
      })}
    </div>
  );
};

export default ItemCartList;