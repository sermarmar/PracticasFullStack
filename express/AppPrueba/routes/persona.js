const express = require('express');
const router = express.Router();

var infoMiddleware = (req, res, next) => {
    console.log('Respondiendo en la información Middleware');
    next();
}

router.get('/detalle', (req, res, next) => {
    console.log('Entro en el middleware en PERSONA/DETALLE');
    next();
}, (req, res, next) => {
    console.log('Respondiendo en el segundo Middleware');
    next();
}, (req, res) => {
    res.send('Estoy en PERSONA/DETALLE');
});

router.get('/info', infoMiddleware, (req, res) => {
    res.send("En la url /persona/info");
});

router.get('/:idPersona', (req, res) => {
    console.log(req.params);
    res.send("En la url /persona");
});

router.get('/perfil/:nombre.:idPersona', (req, res) => {
    res.json(req.params);
});







module.exports = router;