/**
 * Apartado A. Usa adecuadamente el método de array 'find' para encontrar el primer número positivo del array 'numeros'. Asigna el valor encontrado a la variable 'primerPositivo'. Por favor, no modifiques el console.log
 */

let numeros = [-5, -10, -50, 7, 70];

let primerPositivo = numeros.find(pos => pos > 0);

console.log("El primer número positivo es: ", primerPositivo); // 7

/**
 * Apartado B. Usa adecuadamente el método 'filter' para obtener todos los números negativos del mismo array. Asigna el valor encontrado a la variable 'numerosNegativos'. Por favor, no modifiques el console.log
 */

let numerosNegativos = numeros.filter(pos => pos < 0);

console.log("Lista de números negativos: ", numerosNegativos); // [-5, -10, -50]