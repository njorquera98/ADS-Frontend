import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { SolicitudesService } from '../../../shared/services/mockups/solicitudes.service';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { UsuariosService } from '../../../shared/services/mockups/usuarios.service';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';

@Component({
  selector: 'profesor-solicitudes',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css',
})
export class ProfesorSolicitudesComponent {
  constructor(
    public solicitudesService: SolicitudesService,
    public asignaturaService: AsignaturasService,
    public usuarioService: UsuariosService, public ayudantiaService: AyudantiasService
  ) {}
  

  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
