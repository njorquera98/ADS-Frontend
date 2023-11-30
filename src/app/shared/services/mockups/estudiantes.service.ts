import { Injectable } from '@angular/core';
import { Estudiante } from '../../../models/estudiante.model';

const ESTUDIANTES_KEY = 'estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  estudiantes: Estudiante[] = [];

  constructor() {
    const estudiantesGuardados = localStorage.getItem(ESTUDIANTES_KEY);
    if (estudiantesGuardados) {
      this.estudiantes = JSON.parse(estudiantesGuardados);
    } else {
      this.estudiantes = [
        { id_usuario: 1, nombre: "Luis", run: "2.222.222-2", apellido_paterno: "Gonzales", apellido_materno: "Gonzales", 
          telefono: "12345676", rol: 1, nro_cuenta: '2222222', tipo_cuenta: 'Vista', banco: 'Banco Estado', promedio_notas: 6.5 },
      ];
      this.guardarEnLocalStorage();
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem(ESTUDIANTES_KEY, JSON.stringify(this.estudiantes));
  }

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
    this.guardarEnLocalStorage();
  }

  obtenerEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }
}
