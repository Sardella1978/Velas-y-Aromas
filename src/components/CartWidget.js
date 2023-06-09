import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {contexto} from './CartContext'
import ShopIcon from "./iconos/ShopIcon.png"

const CartWidget = () => {

    const resultado = useContext (contexto)
      console.log (resultado)
    
                
    return (
        
        <Link to="/carrito" className='cartWidget'><img className='iconoCarrito' src= {ShopIcon} alt= "IconoCarrito"/>
        {resultado.cantidad_total}
        </Link>
        
    )
}
export default CartWidget

