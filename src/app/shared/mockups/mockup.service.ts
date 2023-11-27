import { Injectable } from '@angular/core';
import { Asignatura } from '../../models/asignatura.model';
import { Ayudantia } from '../../models/ayudantia.model';
import { Estudiante } from '../../models/estudiante.model';
import { Periodo } from '../../models/periodo.model';
import { Solicitud } from '../../models/solicitud.model';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  asignaturas: Asignatura[] = [
    { id_asignatura: 0, codigo: 'A0', nombre: "Programación basica", letra: 'A' },
    { id_asignatura: 1, codigo: 'A0', nombre: "Programación basica", letra: 'B' },
    { id_asignatura: 2, codigo: 'A1', nombre: "Base de Datos", letra: 'A' },
    { id_asignatura: 3, codigo: 'A1', nombre: "Base de Datos", letra: 'B' },
  ];
  periodos: Periodo[] = [
    { id_periodo: 0, tipo: 0, fecha_inicio: new Date('2023-09-27'), fecha_fin: new Date('2023-10-26') },
    { id_periodo: 1, tipo: 1, fecha_inicio: new Date('2023-10-27'), fecha_fin: new Date('2023-11-26') },
    { id_periodo: 2, tipo: 2, fecha_inicio: new Date('2023-11-27'), fecha_fin: new Date('2023-12-26') },
  ];
  ayudantias: Ayudantia[] = [
    { id_ayudantia: 0, id_asignatura: 0, id_usuario: 0, cupos: 2, horas: 5, estado: 'Creado', id_periodo: 0 },
  ];
  estudiantes: Estudiante[] = [
    { id_usuario: 1, nro_cuenta: '2222222', tipo_cuenta: 'Vista', banco: 'Banco Estado', promedio_notas: 6.5 },
  ];
  solicitudes: Solicitud[] = [
    { id_solicitud: 0, id_ayudantia: 0, id_usuario: 1, fecha: new Date(Date.now()), estado: 'Creado', id_periodo: 1, 
      prioridad: 0, promedio_asignatura: 6.1, anteriormente_ayudante: false }
  ];
  usuarios: Usuario[] = [
    { id_usuario: 0, nombre: "Juan", run: "1.111.111-1", apellido_paterno: "Perez", apellido_materno: "Perez", 
    telefono: "12345675", rol: 0 },
    { id_usuario: 1, nombre: "Luis", run: "2.222.222-2", apellido_paterno: "Gonzales", apellido_materno: "Gonzales", 
    telefono: "12345676", rol: 1 },
    { id_usuario: 2, nombre: "Francisco", run: "3.333.333-3", apellido_paterno: "Donoso", apellido_materno: "Donoso", 
    telefono: "12345677", rol: 2 },
    { id_usuario: 3, nombre: "Miguel", run: "4.444.444-4", apellido_paterno: "Olivares", apellido_materno: "Olivares", 
    telefono: "12345678", rol: 3 },
  ];

  constructor() { }
}
