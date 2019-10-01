var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  let num = Math.random();
  if(num > 0.2){
    res.send('Se terminó!!');
  }
  else{
    next();
  }
});

/* GET users listing. */
// http://localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('User NEW');
});

// http://localhost:3000/users/json
router.get('/json', (req, res) => {
  let usuarios = [
    {nombre: 'Sergio', apellidos: 'Martín Martín', edad: 23},
    {nombre: 'Leticia', apellidos: 'Amarilla', edad: 21},
    {nombre: 'Alvaro', apellidos: 'Martín', edad: 22}
  ];
  res.json(usuarios);
});

// http://localhost:3000/users/redirecciona
router.get('/redirecciona', (req, res) => {
  res.redirect('/');
});

module.exports = router;
