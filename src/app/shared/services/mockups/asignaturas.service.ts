import { Injectable } from '@angular/core';
import { Asignatura } from '../../../models/asignatura.model';

const ASIGNATURAS_KEY = 'asignaturas';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  asignaturas: Asignatura[] = [];

  constructor() {
    // Intenta cargar las asignaturas desde localStorage al inicializar el servicio
    const asignaturasGuardadas = localStorage.getItem(ASIGNATURAS_KEY);
    if (asignaturasGuardadas) {
      this.asignaturas = JSON.parse(asignaturasGuardadas);
    } else {
      // Si no hay datos en localStorage, establece algunas asignaturas iniciales
      this.asignaturas = [
        { id_asignatura: 0, codigo: 'A0', nombre: "Programación basica", letra: 'A' },
        { id_asignatura: 1, codigo: 'A0', nombre: "Programación basica", letra: 'B' },
        { id_asignatura: 2, codigo: 'A1', nombre: "Base de Datos", letra: 'A' },
        { id_asignatura: 3, codigo: 'A1', nombre: "Base de Datos", letra: 'B' },
      ];
      // Guarda las asignaturas iniciales en localStorage
      this.guardarEnLocalStorage();
    }
  }

  private guardarEnLocalStorage() {
    localStorage.setItem(ASIGNATURAS_KEY, JSON.stringify(this.asignaturas));
  }

  agregarAsignatura(asignatura: Asignatura) {
    this.asignaturas.push(asignatura);
    this.guardarEnLocalStorage();
  }

  obtenerAsignaturas(): Asignatura[] {
    return this.asignaturas;
  }
}
