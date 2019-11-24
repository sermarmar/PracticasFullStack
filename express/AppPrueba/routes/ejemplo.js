const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('vistaEjemplo', {
        title: 'Título de la página',
        nombre: 'Sergio',
        numProductos: 23,
        animales: ['perro', 'gato', 'canario', 'hamster'],
        estudiantes: [
            {nombre: 'Leticia', apellidos: 'Amarillo'},
            {nombre: 'Álvaro', apellidos: 'Martín'}
        ]
    });
});


module.exports = router;