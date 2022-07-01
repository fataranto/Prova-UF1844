let BBDD = [
    {
        modelo: 'Opel Astra',
        matricula: '1984GI',
        gps: false,
        deposito: 100
    },
    {
        modelo: 'Seat Ibiza',
        matricula: '2021AZ',
        gps: false,
        deposito: 100
    },
    {
        modelo: 'Renault',
        matricula: '2211PL',
        gps: true,
        deposito: 100
    }
]


/**
 * 
 * @param {array} baseDatosCoche Un array de objetos tipo Coche
 * @param {string} matricula Una mátricula de coche
 */
function existeMatricula(baseDatosCoche, matricula) {

    return baseDatosCoche.some(c => c.matricula == matricula);

    // ATENCION: SOLO DEBES MODIFICAR EL CUERPO DE LA FUNCIÓN
}

console.log(existeMatricula(BBDD, "2211PL")); // true
console.log(existeMatricula(BBDD, "2211GI")); // false
console.log(existeMatricula(BBDD, "0000PL")); // false

