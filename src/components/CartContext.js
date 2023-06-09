import React from 'react';
import { createContext, useState, useEffect } from "react"

export const contexto = createContext()

const Provider = contexto.Provider

export const MiProvider=({children}) =>{
     
    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)
    

    useEffect(() => {
        let cantidadTotal = 0;
    
        carrito.forEach((producto) => {
          cantidadTotal += producto.cantidadSeleccionada;
        });
    
        setCantidadTotal(cantidadTotal);
      }, [carrito]);

    useEffect(() => {
        let montoTotal = 0;
    
        carrito.forEach((producto) => {
          montoTotal += producto.cantidadSeleccionada * producto.precio;
        });
    
        setPrecioTotal(montoTotal);
      }, [carrito]);
         
    // const agregarProducto = (producto,cantidad) => {
    //     const copia = [...carrito]
    //     const nuevo_producto = { ...producto,
    //                        cantidad : cantidad
    //     }
    //     copia.push(nuevo_producto)
    //     setCarrito(copia)
    // }

    const agregarProducto = (producto) => {
        if (!isInCart(producto.id)) setCarrito([...carrito, producto]);
      };
    
      const quitarProducto = (idProducto) => {
        setCarrito(carrito.filter((producto) => producto.id !== idProducto));
      };
    
      const vaciarCarrito = () => {
        setCarrito([]);
      };
    
      const isInCart = (id) => {
        return carrito.some((prod) => prod.id === id);
      };
    
    const valorDelContexto = {
        carrito,
        cantidad_total,
        precio_total,
        agregarProducto,
        quitarProducto,
        vaciarCarrito,
        isInCart,
        
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
    
