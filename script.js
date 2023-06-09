/* 1. Crear un array vacío, luego generar 10 números al azar y guardarlos 
en un array. Mostrar en consola el resultado del array. */

/* let numerosAleatorios = []; // Variable global donde se guardaran los numeros aleatorios

//for que sera el encargado de hacer el ciclo empezando desde cero hasta menos 10

for (let index = 0 ; index < 10; index++){
    let numero = Math.floor(Math.random() * 100);
    numerosAleatorios.push(numero);
}

console.log(numerosAleatorios);

 */

/* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, 
(el usuario ingresa: '1,2,3,4,5' y se convierte en[1, 2, 3, 4, 5]). Mostrar en consola dicho resultado. */
/* 
let palabras = prompt("Por favor digite 5 palabras o numeros separados por , (comas)")

let arrayPalabras = palabras.split(",");

console.log(arrayPalabras) */

/* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. 
Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. */

let ordenado = [10,40,30,20,15,5];

ordenado.sort( function (a , b){
    return a - b;
})
console.log(ordenado)

console.log(`El valor mínimo del arreglo es: ${Math.min(...ordenado)}`)
console.log(`El valor máximo del arreglo es: ${Math.max(...ordenado)}`)