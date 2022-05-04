let arrJuegos = [
    {
      nombre:"Halo",
      precio:35
    },
    {
      nombre:"Outer Wilds",
      precio:24
    },
    {
      nombre:"Civilization V",
      precio:90
    },
    {
      nombre:"Stardew Valley",
      precio:30
    },
    {
      nombre:"The Witcher 3",
      precio:40
    },
    {
      nombre:"Portal",
      precio:5
    }
  ]
let presupuesto = +prompt("¿Cuánto deséa invertir?");

let juegosComprados =[];

for(let i=0; i<arrJuegos.length; i++)
{
    if(presupuesto<arrJuegos[i].precio)
    {
        continue;
    }
    let compra = confirm(`Deseas comprar ${arrJuegos[i].nombre}, cuesta S/ ${arrJuegos[i].precio}`)
    if(compra === true)
    {
        juegosComprados.push(arrJuegos[i]);
        presupuesto=presupuesto-arrJuegos[i].precio;45
    }
}
// console.log(`los juegos comrados son ${juegosComprados}`);
console.table(juegosComprados);
console.log(`Su vuelto es ${presupuesto}`);