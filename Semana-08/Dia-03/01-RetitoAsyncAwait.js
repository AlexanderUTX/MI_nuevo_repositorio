
// let a = Math.random();
// console.log(a)
let a;
const tragamonedasPri = async () =>{
    a = Math.random();
    if(a >= 0.5){
        return "Win1";
    }
    else{
        throw "Lose1";
    }
}
const tragamonedasSeg = async () =>{
    a = Math.random();
    if(a >= 0.5){
        return "Win2";
    }
    else{
        throw "Lose2";
    }
}
const tragamonedasTer = async () =>{
    a = Math.random();
    if(a >= 0.5){
        return "Win3";
    }
    else{
        throw "Lose3";
    }
}
const tragamonedasCuar = async () =>{
    a = Math.random();
    if(a >= 0.5){
        return "Win4";
    }
    else{
        throw "Lose4";
    }
}
const validarDatos = async () =>{
    try{
        let dato1 = await tragamonedasPri();
        console.log(dato1);
        let dato2 = await tragamonedasSeg();
        console.log(dato2);
        let dato3 = await tragamonedasTer();
        console.log(dato3);
        let dato4 = await tragamonedasCuar();
        console.log(dato4);
    }
    catch (errado){
        console.log(errado);
    }
}
validarDatos();

// const traerDatos = async () => {
//       return "Data Obtenida"; //resolve - bien
//     //   throw "Error al obtener los datos" //reject - mal
//     };
    
//     // traerDatos()
//     // .then((rpta) => {
//     //     console.log(rpta)
//     // })
//     // .catch((error) => {
//     //     console.log(error)
//     // })
    
//     const traerInfoUsuario = async () => {
//       return "Info Usuario"; //resolve - bien
//     //   throw "Error al obtener los datos" //
//     };
    
//     const validarUsuario = async () => {
//       return "Usuario Validado"; //resolve - bien
//       // throw "Error al obtener los datos" //reject - mal
//     };
    
//     const pedirDatos = async () => {
//       //await = Wait Chepiiiii, espera, esto es asíncrono
//       try {
//         //ejecuta este bloque de codigo y si todo va bien dame el resultado .then() / return / resolve
//         let rpta =  await traerDatos();
//         console.log(rpta);
//         let rptaUsuario = await traerInfoUsuario();
//         console.log(rptaUsuario);
//         let rptaValidar = await validarUsuario();
//         console.log(rptaValidar);
//       } catch (errorcito) {
//         //.catch() //throw / reject
//         console.log(errorcito);
//       }
//     };
//     pedirDatos();