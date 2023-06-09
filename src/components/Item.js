//acá tenemos que armar una card que se verá en ItemListContainer
import React from 'react';
import {Link} from "react-router-dom"

function Item ({id, name, image, precio, stock}){
    return (
        <div>
            <div className="card">
            <img src={image} alt={image} />
            <h3>{name}</h3>
            <p className="price">$ {precio}</p>
            <button className='btnVerDetalle'><Link className="buttonCard" to={`/detail/${id}`}>Ver Detalle</Link> </button>
            </div>
        </div>
    )
}

export default Item