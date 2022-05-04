console.log("hola2")
const funcioncita = parame =>{
    console.log(parame)
}
funcioncita("soy el parametro wiii")
x = 10

let usuarios = [
{    id:2,
    nombre: "lala"
},
{
    id:3,
    nombre:"poff"
}];

const GetUsuario = id =>{
    return new Promise((resolve,reject) =>{
        if(usuarios.find(usuario => usuario.id === id)){
            resolve(`nombre de usuario es: ${usuarios.nombre}`)
        }
        else{
            reject('no hay we')
        }
    });
}
GetUsuario(4)
.then(res =>{
    console.log(res);
})
.catch(error =>{
    console.log(error)
})
