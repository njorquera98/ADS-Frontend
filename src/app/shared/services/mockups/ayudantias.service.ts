import { Injectable } from '@angular/core';
import { Ayudantia } from '../../../models/ayudantia.model';

const AYUDANTIAS_KEY = 'ayudantias';

@Injectable({
  providedIn: 'root'
})
export class AyudantiasService {
  ayudantias: Ayudantia[] = [];

  constructor() {
    const ayudantiasGuardadas = localStorage.getItem(AYUDANTIAS_KEY);
    if (ayudantiasGuardadas) {
      this.ayudantias = JSON.parse(ayudantiasGuardadas);
    } else {
      this.ayudantias = [
        {
          id_ayudantia: 0,
          id_asignatura: 0,
          id_usuario: 0,
          cupos: 2,
          horas: 5,
          estado: 'Creado',
          id_periodo: 0,
        },
        {
          id_ayudantia: 1,
          id_asignatura: 1,
          id_usuario: 1,
          cupos: 1,
          horas: 3,
          estado: 'Creado',
          id_periodo: 0,
        },
      ];
      this.guardarEnLocalStorage();
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem(AYUDANTIAS_KEY, JSON.stringify(this.ayudantias));
  }

  agregarAyudantia(ayudantia: Ayudantia) {
    this.ayudantias.push(ayudantia);
    this.guardarEnLocalStorage();
  }

  obtenerAyudantias(): Ayudantia[] {
    return this.ayudantias;
  }

  obtenerAyudantia(id: number): Ayudantia | undefined {
    return this.ayudantias.find((ayudantia) => ayudantia.id_ayudantia === id);
  }
}
