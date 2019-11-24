import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  //Sencilla
  getAll(): Escritor[] {
    return ESCRITORES;
  }

  //Profesional
  getAllP(): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      setTimeout(() => resolve(ESCRITORES), 3000);
    });
  }

  getById(pId): Promise<Escritor> {
    return new Promise<Escritor>((resolve, reject) => {
      const escritor = ESCRITORES.find((item) => item.id == pId);
      resolve(escritor);
    });
  }

}
