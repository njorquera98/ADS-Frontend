import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'app-resultados-estudiante',
  templateUrl: './resultados-estudiante.component.html',
  styleUrl: './resultados-estudiante.component.css'
})
export class ResultadosEstudianteComponent {

  resultados: Solicitud[] = [
    {
      id_solicitud: 1,
      id_ayudantia: 1,
      id_usuario: 1,
      fecha: new Date(),
      estado: "aprobado",
      id_periodo: 1,
      prioridad: 1,
      promedio_asignatura: 6.4,
      anteriormente_ayudante: true,
      ayudantia: {
        id_ayudantia: 1,
        id_asignatura: 1,
        id_usuario: 1,
        cupos: 1,
        horas: 6,
        estado: "Aprobado",
        id_periodo: 1,
        profesor: {
          id_usuario: 1,
          nombre: "Leonel",
          run: "41.412.462-1",
          apellido_paterno: "Alarcon",
          apellido_materno: "Perez",
          telefono: "912345678",
          rol: 2
        },
        asignatura: {
          id_asignatura: 1,
          codigo: "C102",
          nombre: "Tecnologia Web",
          letra: "A"
        }
      },
      estudiante: {
        id_usuario: 1,
        nombre: "Juan",
        run: "11.123.123-2",
        apellido_paterno: "Perez",
        apellido_materno: "Rojas",
        telefono: "9123456677",
        rol: 1,
      }
    },
    {
      id_solicitud: 1,
      id_ayudantia: 1,
      id_usuario: 1,
      fecha: new Date(),
      estado: "rechazado",
      id_periodo: 1,
      prioridad: 1,
      promedio_asignatura: 6.4,
      anteriormente_ayudante: true,
      ayudantia: {
        id_ayudantia: 1,
        id_asignatura: 1,
        id_usuario: 1,
        cupos: 1,
        horas: 4,
        estado: "rechazado",
        id_periodo: 1,
        profesor: {
          id_usuario: 1,
          nombre: "Ricardo",
          run: "41.412.462-1",
          apellido_paterno: "Valdivia",
          apellido_materno: "Perez",
          telefono: "912345678",
          rol: 2
        },
        asignatura: {
          id_asignatura: 1,
          codigo: "C102",
          nombre: "Base de datos",
          letra: "A"
        }
      },
      estudiante: {
        id_usuario: 1,
        nombre: "Juan",
        run: "11.123.123-2",
        apellido_paterno: "Perez",
        apellido_materno: "Rojas",
        telefono: "9123456677",
        rol: 1,
      }
    },
    {
      id_solicitud: 1,
      id_ayudantia: 1,
      id_usuario: 1,
      fecha: new Date(),
      estado: "en espera",
      id_periodo: 1,
      prioridad: 1,
      promedio_asignatura: 6.4,
      anteriormente_ayudante: true,
      ayudantia: {
        id_ayudantia: 1,
        id_asignatura: 1,
        id_usuario: 1,
        cupos: 1,
        horas: 2,
        estado: "aprobado",
        id_periodo: 1,
        profesor: {
          id_usuario: 1,
          nombre: "Ricardo",
          run: "41.412.462-1",
          apellido_paterno: "Valdivia",
          apellido_materno: "Perez",
          telefono: "912345678",
          rol: 2
        },
        asignatura: {
          id_asignatura: 1,
          codigo: "C102",
          nombre: "Base de datos",
          letra: "B"
        }
      },
      estudiante: {
        id_usuario: 1,
        nombre: "Juan",
        run: "11.123.123-2",
        apellido_paterno: "Perez",
        apellido_materno: "Rojas",
        telefono: "9123456677",
        rol: 1,
      }
    }
  ]

}
