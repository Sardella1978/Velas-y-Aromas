import React from 'react';
import ItemCount from "./ItemCount"
import {useState} from "react"
import {useContext} from "react"
import {contexto} from "./CartContext"
import Swal from "sweetalert2";

function ItemDetail ({name, id, descripcion, stock, precio, image}) {

  const {agregarProducto, IsInCart} = useContext (contexto)
  const [cant, setCant] = useState(0)

  
  const onAdd = (cantidadSeleccionada) => {
    
    if (cantidadSeleccionada > 0) {
      agregarProducto ({ id, name, stock, precio, image, cantidadSeleccionada})
         setCant(cantidadSeleccionada);

      const notificacion = Swal.mixin({
         toast: true,
         position: "top-end",
         showConfirmButton: false,
         timer: 2000,
         timerProgressBar: true,
     });
     notificacion.fire({
      icon: "success",
      title: "Artículo agregado",
    });
    }
  }
  
  return (
    <div className="itemDetail">
        <div>
           <img src={image} alt={id} className="imgItemDetail" />
        </div>
        <div className="description">
          <h3>{name}</h3>
          <p>{descripcion}</p>
          <h4><b>$ {precio}</b></h4>
          <ItemCount initial={0} onAdd={onAdd} stock={stock}/>
        </div>
        
    </div>
    
  )
  }

export default ItemDetail