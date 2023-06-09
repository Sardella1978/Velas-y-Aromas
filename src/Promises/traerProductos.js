//promesa para traer todos los productos. Va en el ItemListContainer
import productos from "../productos";

export const traerProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos);
        }, 500)
    })
}

export default traerProductos;