const express = require('express');
const path = require('path');

// https://www.npmjs.com/package/is-odd
const esNumeroImpar = require('is-odd');

const app = express();
//app.use(express.static('public'));
app.use(express.static(__dirname + '/public/'));


app.use(express.urlencoded({ extended: false }));

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

app.post('/', (req, res) => {
    const esImpar = esNumeroImpar(req.body.numero);
    //console.log(esImpar);

    //res.render('index');

    res.render("index", {
        esImpar: esImpar,
        numero: req.body.numero
    });


});

app.listen(3000);