import productos from "../productos"

//promesa para pedir productos por categoria. Va en el ItemListContainer

const getProductsByCategory= (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log (productos.map(productos =>{
                console.log (productos.categoryId)
            }))
            resolve(categoryId ? productos.filter((producto)=>{
                console.log(producto.categoryId === categoryId)
            }): productos)
        }, 2000)
    })
    
}

export default getProductsByCategory