// console.table(peliculas);
// function peliculasPorIdioma (idioma)
// {
//     let pelisSeleccionadas = [];
//     for(let i = 0; i< peliculas.length; i++)
//     {
//         if(peliculas[i].original_language===idioma)
        
//         {
//             pelisSeleccionadas.push(peliculas[i]);
//         }
//     }
//     return pelisSeleccionadas;
// }
// let pelis = peliculasPorIdioma("ru");
// console.table(pelis);

function peliculasPorGenero(elgenero)
{
    let numberid;
    for(let j = 0; j<generos.length; j++)
    {
        if(generos[j].name===elgenero)
        {
            numberid = generos[j].id;
        }
    }
    console.log(numberid)
    let pelisSeleccionadas = [];
    for(let i = 0; i< peliculas.length; i++)
    {
        for(let k = 0; k< peliculas[i].genre_ids.length; k++)
        {
            if(peliculas[i].genre_ids[k]===numberid)        
            {
                pelisSeleccionadas.push(peliculas[i].title);
            }
        }
    }
    return pelisSeleccionadas;
}
let pelis = peliculasPorGenero("Action");
console.table(pelis);