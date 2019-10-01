var chalk = require('chalk');
console.log(chalk.blue("Hola Mundo Azul"))

class Persona {

    constructor(pNombre, pApellidos, pEdad){
        this._nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }

    get nombre(){
        return(this._nombre);
    }

    set nombre(newValue){
        this._nombre = newValue;
    }

    hablar(){
        console.log(`Me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad}`)
    }

}

let pers1 = new Persona("Sergio", "Martín Martín", 23);
let pers2 = {
    nombre: 'Pedro',
    apellidos: 'Martín',
    edad: 30
}
console.log(pers1);
console.log(pers2);
pers1.hablar();
