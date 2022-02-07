const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
let numbers = [];
function esPrimo(numero){
let raiz = Math.floor(Math.sqrt(numero)) + 1;
for(let i = 2; i < raiz; i++){
  if (numero % i == 0) {
    return false;
  }
}
numbers.push(numero);
// console.log(`El ${numero} es primo`);
return true;
}
ejercicio1.forEach((numero) =>{
  esPrimo(numero);
});
console.log(numbers)

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];
const admitirPaso = (persona) => {
    if (persona.edad >= 18 && persona.esFamiliar == true) {
        console.log(`Puedes pasar ${persona.nombre}`)
    } 
}
ejercicio2.forEach((persona) =>{
    admitirPaso(persona);
});
