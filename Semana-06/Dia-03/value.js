let divContenido = document.getElementById("contenido");

divContenido.innerHTML = `<h1>Eventos y value</h1>
                        <input type ="text" id ="input_nombre">`

let inputNombre= document.getElementById("input_nombre");

inputNombre.setAttribute("placeholder","Ingrese su nombre");
inputNombre.setAttribute("required",true);


inputNombre.addEventListener("change",function(evento){
    console.log(evento.target)
    console.log(evento.target.value)
})

let boton = document.createElement("button");
boton.innerHTML="obten el valor";
divContenido.appendChild(boton);

boton.addEventListener("click",function(){
    console.log(inputNombre.value);
})