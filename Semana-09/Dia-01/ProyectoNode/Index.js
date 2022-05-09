// console.log("Hola Mundo!")
const axios = require("axios");

axios.get("https://62646590a55d5055be485436.mockapi.io/Productos")
.then((rpta) =>{
    console.log(rpta.data)
})
.catch((error) =>{
    console.log(error)
})