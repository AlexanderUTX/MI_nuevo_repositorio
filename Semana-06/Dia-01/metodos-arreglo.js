let alumno = ["alex", "javier", "dana", "steve"]
function contar(alum)
{
    console.log(alum);
}
alumno.forEach(contar);

let saludos = alumno.map(function(nomb){return `Hola ${nomb}`})
console.log(saludos);
console.table(saludos)