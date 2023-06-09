import React from 'react';
import ItemCartList from "./ItemCartList";
import ButtonPrimario from "./ButtonPrimario";
import { useContext } from "react";
import {contexto} from "./CartContext"
import { useNavigate } from "react-router-dom";


const ItemCartContainer = () => {
  const { vaciarCarrito, cantidad_total, precio_total } =
    useContext(contexto);
  
  const navigate = useNavigate();  

  const limpiarCarrito = () => {
    vaciarCarrito();
  };

  return (
    <>
      
    <div className="ItemCartContainer">
      <h2>Tu carrito</h2>
      
        {cantidad_total > 0 ? (
          <>
            <div >
              <ItemCartList />
            </div>

           <div className="carritoTotal">  
              <div >
                <ButtonPrimario
                  accion={limpiarCarrito}
                  texto="Vaciar Carrito"
                  tipoBoton={"danger"}
                />
              </div> 
              <div>
                <ButtonPrimario
                  accion={() => navigate("/checkout")}
                  texto="Terminar compra"
                  tipoBoton={"confirmar"}
                />
                </div>
                <div className='totalCarrito'>  
                  Total:{" "}
                  <span >{"$" + precio_total}</span>
                </div>
               </div>
                                            
          </>
        ) : (
          <>
            <h2 >
              El carrito está vacío
            </h2>
            <div>
              <ButtonPrimario
                accion={() => navigate("/")}
                texto="Volver a Home"
                tipoBoton={"primario"}
              />
            </div>
          </>
        )}
      </div>
      </>
  );
};

export default ItemCartContainer;





