// una clinica cobra al hacer consultas va a justando los precios:
// las 3 primeras consultas cuestan 150 so cada una
// las 2 sigtes cuestan 120so cada una
// las 2 sigtes cuestan 100so c/u
// y los restantes 60so c/u
// Se requiere saber 
// a) cuanto pagara el paciente por todas su citas realizadas
// primera situacion, conocemos cuantas citas en total tiene el paciente
// 1,2,3 = 150
// 4,5 = 120
// 6, 7 = 100
// 8 a mas = 60

let cantidad= Number(prompt("Cuantas citas a tenido?"));
if(cantidad<=3)
   { console.log("el pago total es de 150so")
}
if(cantidad>3 && cantidad<=5)
   { console.log("el pago total es de 120so")
}
if(cantidad>5 && cantidad<=7)
   { console.log("el pago total es de 100so")
}
if(cantidad>8)
{
    console.log("el pago total es de 60so")
}