import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AyudantiasService } from '../../../shared/services/ayudantias.service';
import { AsignaturasService } from '../../../shared/services/asignaturas.service';
import { Asignatura } from '../../../models/asignatura.model';
import { SolicitudesService } from '../../../shared/services/solicitudes.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-ayudantias',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './ayudantias.component.html',
  styleUrl: './ayudantias.component.css',
})
export class AyudantiasComponent {
  constructor(
    private ayudantiasService: AyudantiasService,
    private asignaturaService: AsignaturasService,
    private solicitudService: SolicitudesService,
    private authService: AuthService
  ) {}
  ayudantias: any = [];
  asignaturas: any = [];
  solicitudes: any = [];
  ngOnInit() {
    this.ayudantiasService.getAyudantias().subscribe((data) => {
      this.ayudantias = data.filter(a => a.estado === "Aprobado");
    });
    this.asignaturaService.getAsignaturas().subscribe((data) => {
      this.asignaturas = data;
    });
    this.solicitudService.getSolicitudes().subscribe((data) => {
      this.solicitudes = data;
    });
    console.log(this.authService.getCuenta()?.id_usuario);
  }

  getAsignatura(id: number): Asignatura | undefined {
    return this.asignaturas.find(
      (asignatura: Asignatura) => asignatura.id_asignatura === id
    );
  }

  getEstadoSolicitud(idAyudantia: number): string {
    const solicitud = this.solicitudes.find(
      (sol: any) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.getCuenta()?.id_usuario
    );
    return solicitud?.estado || 'Nada';
  }

  deleteSolicitud(idAyudantia: number) {
    const solicitud = this.solicitudes.find(
      (sol: any) =>
        sol.id_ayudantia == idAyudantia &&
        sol.id_usuario == this.authService.getCuenta()?.id_usuario
    );
    if (solicitud) {
      //console.log(solicitud);
      this.solicitudService.deleteSolicitud(solicitud.id_solicitud).subscribe((data) => {
        console.log(data);
        this.ayudantiasService.getAyudantias().subscribe((data) => {
          this.ayudantias = data.filter(a => a.estado === "Aprobado");
        });
        this.asignaturaService.getAsignaturas().subscribe((data) => {
          this.asignaturas = data;
        });
        this.solicitudService.getSolicitudes().subscribe((data) => {
          this.solicitudes = data;
        });
      });
    }
  }

  showModal: boolean[] = [];
  handleModal(i: number) {
    this.showModal[i] = !this.showModal[i];
  }
}
