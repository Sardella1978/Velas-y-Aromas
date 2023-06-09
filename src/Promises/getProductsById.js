//promesa para traer UN producto. Va en el ItemDetailContainer
import productos from "../productos"

const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}

export default getProductsById