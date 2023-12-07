import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Asignatura } from '../../../models/asignatura.model';
import { AyudantiasServices } from '../../../shared/services/ayudantias.service';
import { AsignaturasServices } from '../../../shared/services/asignaturas.service';
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
      console.log('ayudantias: ', data);
      this.ayudantias = data;
    });
    this.asignaturaService.getAsignaturas().subscribe((data) => {
      console.log('asignaturas: ', data);
      this.asignaturas = data;
    });
    this.solicitudService.getSolicitudes().subscribe((data) => {
      console.log('solicitudes: ', data);
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
      this.solicitudService
        .deleteSolicitud(solicitud.id_solicitud)
        .subscribe((res) => {
          if (res.status == 204) {
            console.log('solicitud eliminada');
            this.solicitudService.getSolicitudes().subscribe((data) => {
              this.solicitudes = data;
            });
          } else {
            console.log('no se pudo eliminar la solicitud');
          }
        });
    }
  }

  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
