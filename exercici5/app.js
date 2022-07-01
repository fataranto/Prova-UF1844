const express = require('express');
const dniValidator = require('spain-id');

console.log('Funciones de este módulo:', dniValidator);

const app = express();

app.use(express.urlencoded({ extended: false })); //no cerraba bien la línea

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/formulario.html");
})

app.post('/', (req, res) => { //no se indicaba bien el endpoint

    const dni = req.body.DNI;

    console.log(dni);
     if (dniValidator.validateSpanishId(dni)) { //estaba validando inversamente (true por false)
        res.send("El número de identificación es válido");
    }

    else {
        res.send("El número de identificación <strong>NO</strong> es válido <BR>Un número válido debe ser en los sguientes formatos:<BR>DNI: 12340190A<BR>NIE: X1234019X");
    }
})

app.listen(3000); //Decía "L"isten en lugar de "l"isten