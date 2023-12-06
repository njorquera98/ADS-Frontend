import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { Asignatura } from '../../../models/asignatura.model';
// import { AuthService } from '../../../shared/services/mockups/auth.service';
import { SolicitudesService } from '../../../shared/services/mockups/solicitudes.service';
import { AyudantiasServices } from '../../../shared/services/ayudantias.service';
import { AsignaturasServices } from '../../../shared/services/asignaturas.service';
import { Observable } from 'rxjs';
import { Ayudantia } from '../../../models/ayudantia.model';
import { SolicitudesServices } from '../../../shared/services/solicitudes.service';
import { AuthServices } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-ayudantias',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './ayudantias.component.html',
  styleUrl: './ayudantias.component.css',
})
export class AyudantiasComponent {
  constructor(
    private ayudantiasService: AyudantiasServices,
    private asignaturaService: AsignaturasServices,
    private solicitudService: SolicitudesServices,
    private authService: AuthServices
  ) {}
  ayudantias: any = [];
  asignaturas: any = [];
  solicitudes: any = [];
  ngOnInit() {
    this.ayudantiasService.getAyudantias().subscribe((data) => {
      console.log(data);
      this.ayudantias = data;
    });
    this.asignaturaService.getAsignaturas().subscribe((data) => {
      console.log(data);
      this.asignaturas = data;
    });
    this.solicitudService.getSolicitudes().subscribe((data) => {
      console.log(data);
      this.solicitudes = data;
    });
    console.log(this.authService.obtenerCuenta()?.id_usuario);
  }

  obtenerAsignatura(id: number): Asignatura | undefined {
    return this.asignaturas.find(
      (asignatura: Asignatura) => asignatura.id_asignatura === id
    );
  }

  obtenerEstadoSolicitud(idAyudantia: number): string {
    const solicitud = this.solicitudes.find(
      (sol: any) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.obtenerCuenta()?.id_usuario
    );
    return solicitud?.estado || 'Nada';
  }

  eliminarSolicitud(idAyudantia: number) {
    const solicitud = this.solicitudes.find(
      (sol: any) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.obtenerCuenta()?.id_usuario
    );
    if (solicitud) {
      //console.log(solicitud);
      this.solicitudService.deleteSolicitud(solicitud.id_solicitud);
    }
  }

  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
