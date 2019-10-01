const Persona = require('./persona');
const exec = require('child_process').exec;

let pers = new Persona('Jesús', 'Martín', 56);
pers.hablar();

console.log(__dirname);
console.log(__filename);
console.log(process.argv);

//exec.('open http://www.google.es')