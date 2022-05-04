let pikachu1 = {
    vida:20,
    fuerza:40
}
let pikachuAzul = {...pikachu1, tipo:"Radioactivo"}

let pikachuRojo = pikachu1;

pikachu1.vida=15;

console.table(pikachuRojo);
console.table(pikachu1);

console.log("Azul",pikachuAzul)

