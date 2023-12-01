import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { Asignatura } from '../../../models/asignatura.model';
import { AuthService } from '../../../shared/services/mockups/auth.service';
import { SolicitudesService } from '../../../shared/services/mockups/solicitudes.service';

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
    private solicitudService: SolicitudesService,
    private authService: AuthService
  ) {}

  obtenerEstadoSolicitud(idAyudantia: number): string {
    const solicitudes = this.solicitudService.obtenerSolicitudes();
    const solicitud = solicitudes.find(
      (sol) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.obtenerCuenta()?.id_usuario
    );
    return solicitud?.estado || 'No postulado';
  }

  eliminarSolicitud(idAyudantia: number) {
    const solicitudes = this.solicitudService.obtenerSolicitudes();
    const solicitud = solicitudes.find(
      (sol) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.obtenerCuenta()?.id_usuario
    );
    if (solicitud) {
      //console.log(solicitud);
      this.solicitudService.eliminarSolicitud(solicitud.id_solicitud);
    }
  }

  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
