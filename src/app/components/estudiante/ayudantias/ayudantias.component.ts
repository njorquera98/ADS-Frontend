import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { Asignatura } from '../../../models/asignatura.model';
import { AuthService } from '../../../shared/services/mockups/auth.service';

@Component({
  selector: 'app-ayudantias',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './ayudantias.component.html',
  styleUrl: './ayudantias.component.css',
})
export class AyudantiasComponent {
  constructor(
    public ayudantiasService: AyudantiasService,
    public asignaturaService: AsignaturasService,
    private authService: AuthService
  ) {}

  // obtenerEstadoSolicitud(idAyudantia: number): string {

  // }
  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
