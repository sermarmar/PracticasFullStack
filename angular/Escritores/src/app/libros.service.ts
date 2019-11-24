import { Injectable } from '@angular/core';
import { LIBROS } from './db/libros.db';
import { Libro } from './models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritorId(escritorId): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      resolve(LIBROS.filter((item) => item.escritor == escritorId));
    });
  }
}
