const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true



// 1. Qué tipo de variable JavaScript devuelve la función checkAvailability (string, number, bool, object, function, array) ?

// Respuesta: boolean

// 2. Qué tipo de variable JavaScript devuelve el método de array 'some' (string, number, bool, object, function, array) ?

// Respuesta: boolean

// 3. Qué tipo de variable JavaScript toma por parámetro el método 'some' (string, number, bool, object, function, array) ?

// Respuesta: function

// 4. ¿Qué valor devuelve  la siguiente llamada a la función ?

// checkAvailability(fruits, 'mangO');

// Respuesta: true

