//Tareitas
/**
1. Obtener los datos, mockapi a proveer los datos
1.1 Esos datos estan en el formato o estructura que necesitO (MOCKAPI, guarda un JSON)
2. Convertir esos datos e insertarlos en el HTML
 */

console.log("Hola")

import { getProducts } from "./Producto_Service.js";
import { drawProducts } from "./interfaz.js";

const obtainProducts = async () => {
    const products = await getProducts()
    console.table(products)
    drawProducts(products)
}

obtainProducts();