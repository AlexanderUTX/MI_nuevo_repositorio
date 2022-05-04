let titulo = document.getElementById("titulo");

console.log(titulo.innerHTML);

titulo.innerHTML = "<i>Nuevo Titulo</i>"

titulo.style.color= "red"
titulo.style.padding = "20px"
titulo.style.backgroundColor = "blue"
titulo.style.textAlign = "center"
titulo.style.borderRadius = "10px"

let subtitulo = document.querySelector(".subtitulo");

console.log(subtitulo.innerHTML);

// subtitulo.innerHTML = "<h2>Principal</h2>"
subtitulo.style.border = "4px solid #4c4c4c"

let main = document.querySelector( "main");

main.style.backgroundColor = "lightblue";

let listaitem = document.querySelectorAll(".li_item");

console.log(listaitem);

listaitem.forEach(function(liItem)
{
    liItem.style.fontFamily="arial";

    liItem.style.color = "purple";
})

let divContenido = document.getElementById("contenido");

divContenido.innerHTML = `<p id ="texto">
                            Arriba Perú
                          </p>`;

let divAlerta = document.createElement("div");
console.log(divAlerta);

divAlerta.innerHTML = "El repechaje es el 13 de junio";

// crea un hijo del anterio contenedor
divContenido.appendChild(divAlerta);

divAlerta.style.color = "red";

let preguntar = confirm("¿Deseas apoyar a la selcción?")

if(preguntar === true)
{
    let divApoyo=document.createElement("div");
    divApoyo.innerHTML="Vamos Perú!!!";
    divContenido.appendChild(divApoyo);
}

let imagen = document.createElement("img");
imagen.setAttribute("src", "https://img.europapress.es/fotoweb/fotonoticia_20220330103153_420.jpg");
// imagen.setAttribute("src","https://img.europapress.es/fotoweb/fotonoticia_20220329184141_1200.jpg");
imagen.style.width = "150px"

divContenido.appendChild(imagen);

let selección = ["Cuevita", "Lapadula", "Orejitas","Carrillo", "Elcondor Mendoza", "San Gallese"];
selección.forEach(function(players){
    let pJugador = document.createElement("p");
    pJugador.innerHTML=players;
    divContenido.appendChild(pJugador)
})
let p5 = document.querySelector("#contenido > p:nth-of.type(5)");
