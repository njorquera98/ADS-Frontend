import { Component } from '@angular/core';
import { Ayudantia } from '../../../models/ayudantia.model';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ayudantias',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './ayudantias.component.html',
  styleUrl: './ayudantias.component.css',
})
export class AyudantiasComponent {
  ayudantias: Ayudantia[] = [
    {
      id_ayudantia: 1,
      id_asignatura: 3124,
      id_usuario: 1,
      cupos: 2,
      horas: 4,
      estado: 'no postulado',
      id_periodo: 1,
    },
    {
      id_ayudantia: 2,
      id_asignatura: 512,
      id_usuario: 2,
      cupos: 1,
      horas: 2,
      estado: 'postulado',
      id_periodo: 2,
    },
    {
      id_ayudantia: 3,
      id_asignatura: 5123,
      id_usuario: 3,
      cupos: 3,
      horas: 6,
      estado: 'no postulado',
      id_periodo: 3,
    },
  ];
}
