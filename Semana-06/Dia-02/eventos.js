let boton = document.querySelector("#boton");
let divContenido = document.getElementById("contenido");
// elemento.addEventListener("evento","funcion")
boton.addEventListener("click",function(){
    alert("Hola me diste click");
})

let caja = document.createElement("div");
caja.style.width="200px";
caja.style.height="200px";
caja.style.backgroundColor="rebeccapurple";
caja.style.border="2px solid orangered";

divContenido.appendChild(caja);
caja.addEventListener("mouseover",function(){
    console.log("Pasaste por encima");
})

let seriesTV=[
    "La casa de papel",
    "Mr. Robot",
    "Demon Slayer",
    "Grey's Anatomy",
    "Breaking Bad",
    "GOT",
    "Euphoria",
    "Killin eve",
    "Prision Break",
    "Halo",
    "Moonkinght",
    "El codigo de la discordia"
]

seriesTV.forEach(function(serie){
    let nuevoParrafo= document.createElement("p");
    console.log(serie);
    nuevoParrafo.innerHTML=serie;
    nuevoParrafo.style.cursor="pointer"
    divContenido.appendChild(nuevoParrafo);

    nuevoParrafo.addEventListener("dblclick", function(){
        alert(`Has escogido la serie ${serie}`)
    })
})

let input = document.createElement("input");

input.setAttribute("type","password");
divContenido.appendChild(input);

let btnVer = document.createElement("button");
btnVer.innerHTML="Mostrar Password";
divContenido.appendChild(btnVer);

let esVisible = false;

btnVer.addEventListener("click",function(){
    esVisible= !esVisible;
    if(esVisible===true){
        input.setAttribute("type", "text");
    }
    else{
        input.setAttribute("type","password");
    }
})

let linkGoogle=document.createElement("a")
linkGoogle.innerHTML="Vamo A Google";
linkGoogle.setAttribute("href","https://google.com")
divContenido.appendChild(linkGoogle);

linkGoogle.addEventListener("click",function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log("click!")
})