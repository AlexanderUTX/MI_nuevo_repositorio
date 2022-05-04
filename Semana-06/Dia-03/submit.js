let formulario = document.getElementById("formulario")
let tareasguardadas = document.getElementById("tareasguardadas");

let porHacer=[];

formulario.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(formulario["tareaNueva"].value)
    agregarTarea(formulario["tareaNueva"].value)

})
function agregarTarea (tarea){
    let nuevatarea=document.createElement("p");
    nuevatarea.innerHTML=tarea;
    tareasguardadas.appendChild(nuevatarea);
    porHacer.push(tarea);
    guardarEnLS();
}
function guardarEnLS(){
    let porHacerConv= JSON.stringify(porHacer);
    console.log(porHacerConv);
    localStorage.setItem("tareasPorHacer", porHacerConv);
}
function leerLS(){
    let tareasDelLS = localStorage.getItem("tareasPorHacer");
    console.log(tareasDelLS);
    let porHacerReConv = JSON.parse(tareasDelLS)
    porHacerReConv.forEach(function(tarea){
        agregarTarea(tarea);
        })
}
leerLS();