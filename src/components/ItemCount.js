import React from 'react';
import { useState } from "react";

function ItemCount ({stock,initial, onAdd}) {
  const [count, setCount] = useState (0)
    
  function aumentar () {
      if (count < stock){
        setCount (count + 1)
      }
    }
    function disminuir (){
      if (count > 0){
        setCount (count - 1)
      }
    }
    const agregarAlCarrito = () => {
       onAdd(count)
       
      }

  return (
    <>
        <div className="count">
          <div className="botonera">
            <button className="btnCount" onClick={aumentar}>+</button>
            <p>{count}</p>
            <button className="btnCount" onClick={disminuir}>-</button>
          </div>    
          <div className="botonAgregar">
            <button className="btnAgregar" onClick={agregarAlCarrito}>agregar al carrito</button>
          </div>
        </div>
    </>
               
  )
}
      
export default ItemCount