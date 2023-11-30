import { Injectable } from '@angular/core';
import { Estudiante } from '../../../models/estudiante.model';

const ESTUDIANTES_KEY = 'estudiantes';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  estudiantes: Estudiante[] = [];

  constructor() {
    const estudiantesGuardados = localStorage.getItem(ESTUDIANTES_KEY);
    if (estudiantesGuardados) {
      this.estudiantes = JSON.parse(estudiantesGuardados);
    } else {
      this.estudiantes = [
        {
          id_usuario: 1,
          nro_cuenta: '3214124',
          tipo_cuenta: 'corriente',
          banco: 'banco estado',
          promedio_notas: 4.3,
        },
        {
          id_usuario: 2,
          nro_cuenta: '2214124',
          tipo_cuenta: 'corriente',
          banco: 'banco de chile',
          promedio_notas: 5.1,
        },
      ];
      this.guardarEnLocalStorage();
    }
  }

  private guardarEnLocalStorage() {
    localStorage.setItem(ESTUDIANTES_KEY, JSON.stringify(this.estudiantes));
  }

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
    this.guardarEnLocalStorage();
  }

  obtenerEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  obtenerEstudiante(id: number): Estudiante | undefined {
    return this.estudiantes.find((estudiante) => estudiante.id_usuario === id);
  }
}
