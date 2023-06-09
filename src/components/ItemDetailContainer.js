
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from "../firebase"
import { collection , getDoc , doc } from "firebase/firestore"


function ItemDetailContainer() {
    const {id} = useParams()
    const [item, setItem] = useState()
    const [loading,setLoading] = useState(true)
     
    
    useEffect(() => {

      setLoading(true)
  
      const collectionProductos = collection(db,"Productos")
      const refeDelDoc = doc (collectionProductos, id )
           console.log (refeDelDoc)
      const consulta = getDoc(refeDelDoc)
  
      consulta
             
        .then(resultado=>{
          const producto = resultado.data()
             console.log (resultado.data())
          setItem(producto)
                 
        })
        .catch((error)=>{
          console.log(error)
        })
      }, [])

  return (
         <div style={{marginTop: '30px'}}>
            <ItemDetail {...item} />
        </div>
  )
  }

export default ItemDetailContainer