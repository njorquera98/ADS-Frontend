import { Component } from '@angular/core';
import { Solicitud } from '../../../models/solicitud.model';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'profesor-solicitudes',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css',
})
export class ProfesorSolicitudesComponent {
  solicitudes: Solicitud[] = [
    {
      id_solicitud: 1,
      id_ayudantia: 7,
      id_usuario: 4,
      fecha: new Date('2022-11-15T08:30:00Z'),
      estado: 'Aprobado',
      id_periodo: 3,
      prioridad: 1,
      promedio_asignatura: 6.5,
      anteriormente_ayudante: true,
    },
    {
      id_solicitud: 2,
      id_ayudantia: 3,
      id_usuario: 8,
      fecha: new Date('2022-11-20T12:45:00Z'),
      estado: 'Rechazado',
      id_periodo: 1,
      prioridad: 1,
      promedio_asignatura: 5.8,
      anteriormente_ayudante: false,
    },
    {
      id_solicitud: 3,
      id_ayudantia: 10,
      id_usuario: 2,
      fecha: new Date('2022-11-10T10:15:00Z'),
      estado: 'Aprobado',
      id_periodo: 5,
      prioridad: 2,
      promedio_asignatura: 4.9,
      anteriormente_ayudante: false,
    },
  ];

  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
