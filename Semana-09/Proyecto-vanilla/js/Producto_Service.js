const URL = "https://62636b83c430dc560d2ebb2a.mockapi.io/productos";

const getProducts = async () => {
    try {
        const rpta = await fetch(URL) //fetch me da la respuesta, no los datos
        const datos = await rpta.json()
        return datos;
    } catch (error) {
        throw error;
    }
}

export {
    getProducts
}