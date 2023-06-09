import React from 'react';
import ButtonPrimario from "./ButtonPrimario";
import { useContext } from "react";
import {contexto} from "./CartContext";
import Swal from "sweetalert2";


const ItemCart = ({ id, image, name, cantidadSeleccionada, precio }) => {
    const { quitarProducto } = useContext(contexto);
    const quitarProductoCarrito = (id) => {
        quitarProducto(id);
        const notificacion = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
    
        notificacion.fire({
          icon: "warning",
          title: "Artículo eliminado",
        });
      
  }

return (
    <div className="ItemCart" >
      
         <div className='imgCarrito'><img src={image} className='imgItemCart'></img></div>
         <p> {name} </p>
         <p>
            <span >Cant: </span>{" "}
            <span >{cantidadSeleccionada}</span>
          </p>
          
          <p>
            <span >c/u:</span>
            <span > {" "} ${precio} </span>
          </p>
          <p>
            <span >Subtotal: </span>
            <span > {" "} ${precio * cantidadSeleccionada}</span>
          </p>
             
      <div>
        <ButtonPrimario
          accion={() => quitarProductoCarrito(id)}
          tipoBoton={"danger"}
          texto="X"
        />
      </div>
    </div>
  );
};

export default ItemCart;