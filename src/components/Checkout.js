import React from 'react';
import { db } from "../firebase"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import {contexto} from "./CartContext"
import { useContext } from 'react';
import Formulario from './Formulario';
import ItemCartList from "./ItemCartList"
import { useNavigate } from "react-router-dom";
import ButtonPrimario from "./ButtonPrimario";


const Checkout = () => {
  
  const [usuario, setUsuario] = useState({nombre: "",email: "",tel: ""})
  const {carrito, precio_total, vaciarCarrito} = useContext (contexto)
  const [idCompra,setIdCompra] = useState("")
  const navigate = useNavigate();  


  const handleChange = (e) => {
    const {name,value} = e.target
     setUsuario({...usuario, 
        [name] : value,})
}  
     console.log (usuario)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
   const handleBuy = () => {
    
    const collectionOrdenes = collection(db,"ordenes")

    const orderData = {
      buyer : {
        name : usuario.nombre,
        phone : usuario.tel,
        email : usuario.email,
      },
      items : [{carrito}],
      date : serverTimestamp(),
      total : precio_total,
    }

    const consulta = addDoc(collectionOrdenes,orderData)

    consulta
      .then(resultado=>{
        setIdCompra(resultado.id)
        vaciarCarrito()
      })
      .catch(error=>{
        console.log(error)
      })
    };
 
    if (idCompra !== "") {
      return (
        <>
         <h2>Gracias por su compra <br></br><br></br>Su código es : {idCompra}</h2>
            <div>
                <ButtonPrimario
                accion={() => navigate("/")}
                texto="Volver a Home"
                tipoBoton={"primario"}
              />
            </div>
         </>   
      )
    }

  return (
    <>
      <div className="checkOut">
         <div className="formulario">
           <h3>Complete el formulario y confirme el Pedido</h3>
           <Formulario
            handleChange={handleChange}
            usuario= {usuario}
            handleSubmit= {handleSubmit}
            />
        </div>
        <div className= "resumenPedido">
           <h3>Resumen del pedido</h3>
           <ItemCartList/>
           <p>Precio Total: {precio_total}</p>
        </div>
      </div>  
           
          <div className='botonConfirmar'>
            <button className='btnConfirmarPedido' onClick={handleBuy}>Confirmar Pedido</button>
          </div>
    </>
  )
  }
export default Checkout