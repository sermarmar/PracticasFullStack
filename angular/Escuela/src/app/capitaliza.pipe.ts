import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaliza'
})
export class CapitalizaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    /*const palabras = value.split(' ');
    console.log(palabras);
    const arrNuevo = [];
    for (const palabra of palabras) {
      arrNuevo.push(palabra[0].toUpperCase() + palabra.substring(1).toLowerCase());
    }
    return arrNuevo.join(' ');*/

    return value.split(' ').map(item => item[0].toUpperCase() + item.substring(1).toLowerCase()).join(' ');

  }

}
